import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {MultiDropdownComponent} from './multi-dropdown.component';
import {ReactiveFormsModule} from '@angular/forms';
import {IconModule} from '@ironsource/fusion-ui/components/icon';
import {ButtonModule} from '@ironsource/fusion-ui/components/button';
import {InputModule} from '@ironsource/fusion-ui/components/input';
import {FlagModule} from '@ironsource/fusion-ui/components/flag';
import {CheckboxModule} from '@ironsource/fusion-ui/components/checkbox';
import {ClickOutsideModule} from '@ironsource/fusion-ui/directives/click-outside';
import {FilterByFieldModule} from '@ironsource/fusion-ui/pipes/collection';
import {CloneModule} from '@ironsource/fusion-ui/pipes/clone';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip';
import {DynamicComponentsModule} from '@ironsource/fusion-ui/components/dynamic-components';
import {DropdownLoaderModule} from '../dropdown-loader/dropdown-loader.module';
import {DropdownOptionModule} from '../dropdown-option/dropdown-option.module';
import {DropdownSearchModule} from '../dropdown-search/dropdown-search.module';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {FilterByFieldPipe} from '@ironsource/fusion-ui/pipes/collection';
import {ClonePipe} from '@ironsource/fusion-ui/pipes/clone';
import {DropdownService} from '../dropdown.service';
import {LogService} from '@ironsource/fusion-ui/services/log';
import {MockLogService, MockUniqueIdService, MockApiService} from '@ironsource/fusion-ui/services/mocks';
import {UniqueIdService} from '@ironsource/fusion-ui/services/unique-id';
import {ApiService} from '@ironsource/fusion-ui/services/api';
import {DropdownSelectModule} from '../dropdown-select/dropdown-select.module';
import {FUSION_STYLE_VERSION_CSS_VAR_NAME, StyleVersion} from '@ironsource/fusion-ui';

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

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                imports: [
                    ReactiveFormsModule,
                    IconModule,
                    ButtonModule,
                    InputModule,
                    FlagModule,
                    CheckboxModule,
                    ClickOutsideModule,
                    FilterByFieldModule,
                    CloneModule,
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
                    },
                    {
                        provide: ApiService,
                        useClass: MockApiService
                    }
                ]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        document.documentElement.style.setProperty(FUSION_STYLE_VERSION_CSS_VAR_NAME, '1');
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
