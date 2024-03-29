import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {ReactiveFormsModule} from '@angular/forms';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {ButtonModule} from '@ironsource/fusion-ui/components/button/v1';
import {InputModule} from '@ironsource/fusion-ui/components/input';
import {FlagModule} from '@ironsource/fusion-ui/components/flag/v1';
import {CheckboxModule} from '@ironsource/fusion-ui/components/checkbox/v1';
import {ClickOutsideModule} from '@ironsource/fusion-ui/directives/click-outside';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip/v1';
import {DynamicComponentsModule} from '@ironsource/fusion-ui/components/dynamic-components/v1';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {FilterByFieldPipe} from '@ironsource/fusion-ui/pipes/collection';
import {ClonePipe} from '@ironsource/fusion-ui/pipes/clone';
import {LogService} from '@ironsource/fusion-ui/services/log';
import {MockLogService, MockUniqueIdService} from '@ironsource/fusion-ui/services/mocks';
import {UniqueIdService} from '@ironsource/fusion-ui/services/unique-id';

import {DropdownLoaderModule} from '@ironsource/fusion-ui/components/dropdown-loader/v1';
import {DropdownOptionModule} from '@ironsource/fusion-ui/components/dropdown-option/v1';
import {DropdownSearchModule} from '@ironsource/fusion-ui/components/dropdown-search/v1';
import {DropdownSelectModule} from '@ironsource/fusion-ui/components/dropdown-select/v1';
import {DropdownService} from '@ironsource/fusion-ui/components/dropdown/service';
import {MultiDropdownComponent} from './multi-dropdown.component';

const optionMock = [
    {
        icon: 'monetize',
        title: 'Item 1',
        id: 1
    },
    {
        icon: 'monetize',
        title: 'Item 2',
        id: 2
    },
    {
        icon: 'monetize',
        title: 'Item 3',
        id: 3
    },
    {
        icon: 'monetize',
        title: 'Item 4',
        id: 4
    }
];

describe('MultiDropdownComponent', () => {
    let component: MultiDropdownComponent;
    let fixture: ComponentFixture<MultiDropdownComponent>;
    let debugEl: DebugElement;
    let el: HTMLElement;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [
                ReactiveFormsModule,
                IconModule,
                ButtonModule,
                InputModule,
                FlagModule,
                CheckboxModule,
                ClickOutsideModule,
                FilterByFieldPipe,
                ClonePipe,
                TooltipModule,
                DynamicComponentsModule,
                DropdownLoaderModule,
                DropdownOptionModule,
                DropdownSearchModule,
                DropdownSelectModule
            ],
            declarations: [MultiDropdownComponent],
            providers: [
                FilterByFieldPipe,
                ClonePipe,
                DropdownService,
                {
                    provide: LogService,
                    useClass: MockLogService
                },
                {
                    provide: UniqueIdService,
                    useClass: MockUniqueIdService
                }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MultiDropdownComponent);
        component = fixture.componentInstance;
        component.options = optionMock;
        component.confirm = true;
        fixture.detectChanges();
        debugEl = fixture.debugElement;
        el = debugEl.nativeElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('Must exist and render DOM Elements" ', () => {
        component.selectAllLabel = 'Select All';
        fixture.detectChanges();
        fixture.debugElement
            .query(By.css('fusion-dropdown-select'))
            .triggerEventHandler('click', {target: fixture.debugElement.query(By.css('fusion-dropdown-select')).nativeElement});
        fixture.detectChanges();

        // options holder
        const optionsEl = fixture.debugElement.query(By.css('ul.options'));
        expect(optionsEl).toBeTruthy();
        expect(optionsEl.nativeElement.classList).toContain('multi');

        // bottom buttons 'Cancel' and 'Apply'
        const bottomActionEl = fixture.debugElement.query(By.css('.dd-actions'));
        expect(bottomActionEl).toBeTruthy();
        expect(bottomActionEl.children.length).toBe(2); // 2 buttons here

        expect(bottomActionEl.nativeElement.querySelector('button').outerHTML).toContain('fusion-button=""');
        expect(bottomActionEl.nativeElement.querySelector('button').textContent.trim()).toContain('Cancel');
        const buttonClasses = bottomActionEl.nativeElement.querySelectorAll('button')[1].classList;

        expect(buttonClasses.contains('primary')).toBeTruthy();
        expect(buttonClasses.contains('small')).toBeTruthy();

        expect(bottomActionEl.nativeElement.querySelectorAll('button')[1].outerHTML).toContain('fusion-button=""');
        expect(bottomActionEl.nativeElement.querySelectorAll('button')[1].textContent.trim()).toContain('Apply');
    });

    it('Should be opened by click', () => {
        fixture.detectChanges();

        fixture.debugElement
            .query(By.css('fusion-dropdown-select'))
            .triggerEventHandler('click', {target: fixture.debugElement.query(By.css('fusion-dropdown-select')).nativeElement});
        fixture.detectChanges();

        expect(fixture.debugElement.query(By.css('div.is-dropdown')).nativeElement.classList).toContain('dd-opened');
    });
});
