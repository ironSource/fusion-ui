import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {ChartLabelsComponent} from './chart-labels.component';
import {Observable, of} from 'rxjs';
import {UniqueIdService} from '@ironsource/fusion-ui/services/unique-id';
import {DebugElement} from '@angular/core';
import {CheckboxModule} from '@ironsource/fusion-ui/components/checkbox/v1';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip';
import {ApiService} from '@ironsource/fusion-ui/services/api';
import {By} from '@angular/platform-browser';
import {FormControl, ReactiveFormsModule} from '@angular/forms';

const MOCK_DATASETS = [
    {id: 'totals', label: 'Sum', color: '#0D148C', labelVisible: new FormControl(true)},
    {id: 123, label: 'AdColony', color: '#3091F6', labelVisible: new FormControl(false), icon: 'android'},
    {id: 124, label: 'Vungle', color: '#FD9C0A', labelVisible: new FormControl(false), icon: 'ios'},
    {id: 125, label: 'AppLovin', color: '#00CCD7', labelVisible: new FormControl(false), icon: 'android'},
    {id: 126, label: 'Chartboost', color: '#FF6A63', labelVisible: new FormControl(false), icon: 'android'},
    {id: 127, label: 'ironSource', color: '#A718A7', labelVisible: new FormControl(false), icon: 'android'},
    {id: 128, label: 'UnityAds', color: '#FF9CBD', labelVisible: new FormControl(false), icon: 'ios'},
    {id: 129, label: 'Flurry', color: '#9999FF', labelVisible: new FormControl(false), icon: 'android'}
];

const MOCK_DATASET_2 = [
    {id: 0, label: 'ironSource', labelSuffix: '39.65%', color: '#3083ff', labelLetter: 'A'},
    {id: 1, label: 'Vungle', labelSuffix: '26.69%', color: '#13c7c8', labelLetter: 'B'},
    {id: 2, label: 'Flurry', labelSuffix: '21.93%', color: '#4ac367', labelLetter: 'C'},
    {id: 3, label: 'UnityAds', labelSuffix: '11.73%', color: '#a617a8', labelLetter: 'D'}
];

class MockUniqueIdService extends UniqueIdService {
    getUniqueId() {
        return 123456789;
    }
}

class MockApiService {
    get(): Observable<any> {
        return of('<svg></svg>');
    }
}

describe('ChartLabelsComponent', () => {
    let component: ChartLabelsComponent;
    let fixture: ComponentFixture<ChartLabelsComponent>;
    let debugEl: DebugElement;
    let el: HTMLElement;

    const bindComponentsData = data => {
        fixture = TestBed.createComponent(ChartLabelsComponent);
        component = fixture.componentInstance;
        component.dataSetsLabels = data;
        fixture.detectChanges();
        debugEl = fixture.debugElement;
        el = debugEl.nativeElement;
    };

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, CheckboxModule, IconModule, TooltipModule],
            declarations: [ChartLabelsComponent],
            providers: [
                {provide: UniqueIdService, useClass: MockUniqueIdService},
                {provide: ApiService, useClass: MockApiService}
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        bindComponentsData(MOCK_DATASETS);
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render label list', () => {
        const labelsEl = debugEl.queryAll(By.css('li'));
        expect(labelsEl.length).toEqual(MOCK_DATASETS.length);

        labelsEl.forEach((element, idx) => {
            expect(element.nativeElement.innerText.trim()).toEqual(MOCK_DATASETS[idx].label);
            const elCheckbox = element.query(By.css('input'));
            expect(elCheckbox.nativeElement.checked).toEqual(MOCK_DATASETS[idx].labelVisible.value);
        });
    });

    it('should render colored checkboxes in check state', () => {
        component.dataSetsLabels = MOCK_DATASETS;
        fixture.detectChanges();
        debugEl = fixture.debugElement;
        const labelsEl = debugEl.queryAll(By.css('li'));

        labelsEl.forEach((element, idx) => {
            const spanEl = element.query(By.css('fusion-checkbox label span'));
            const styleAttribute = spanEl.nativeElement.getAttribute('style');

            if (!MOCK_DATASETS[idx].labelVisible.value) {
                expect(styleAttribute).toBeNull();
            } else {
                expect(styleAttribute).toContain('background: ');
                expect(styleAttribute).toContain(encodeURIComponent(MOCK_DATASETS[idx].color));
            }
        });
    });

    describe('Not checkboxes labels', () => {
        beforeEach(() => {
            bindComponentsData(MOCK_DATASET_2);
        });

        it('should render labels list with letters', () => {
            const labelsEl = debugEl.queryAll(By.css('li'));
            expect(labelsEl.length).toEqual(MOCK_DATASET_2.length);

            labelsEl.forEach((element, idx) => {
                expect(element.nativeElement.classList).toContain('no-checkbox');
                const bulletEl = element.nativeElement.querySelector('.lbl-color');
                expect(bulletEl.classList).toContain('fu-label-letter');
                expect(bulletEl.innerText).toContain(MOCK_DATASET_2[idx].labelLetter);

                expect(element.nativeElement.innerText.trim()).toContain(MOCK_DATASET_2[idx].label);
                expect(element.nativeElement.innerText.trim()).toContain(MOCK_DATASET_2[idx].labelSuffix);
            });
        });
    });
});
