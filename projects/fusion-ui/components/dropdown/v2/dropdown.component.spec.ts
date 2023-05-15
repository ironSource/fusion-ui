import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {ReactiveFormsModule} from '@angular/forms';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {ButtonModule} from '@ironsource/fusion-ui/components/button/v2';
import {InputModule} from '@ironsource/fusion-ui/components/input';
import {FlagModule} from '@ironsource/fusion-ui/components/flag/v1';
import {CheckboxModule} from '@ironsource/fusion-ui/components/checkbox/v2';
import {ClickOutsideModule} from '@ironsource/fusion-ui/directives/click-outside';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip/v2';
import {DynamicComponentsModule} from '@ironsource/fusion-ui/components/dynamic-components/v1';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {FilterByFieldPipe} from '@ironsource/fusion-ui/pipes/collection';
import {ClonePipe} from '@ironsource/fusion-ui/pipes/clone';
import {LogService} from '@ironsource/fusion-ui/services/log';
import {MockLogService, MockUniqueIdService, MockApiService} from '@ironsource/fusion-ui/services/mocks';
import {UniqueIdService} from '@ironsource/fusion-ui/services/unique-id';
import {ApiService} from '@ironsource/fusion-ui/services/api';
import {DropdownLoaderModule} from '@ironsource/fusion-ui/components/dropdown-loader/v2';
import {DropdownOptionsListModule} from '@ironsource/fusion-ui/components/dropdown-options-list/v2';
import {DropdownOptionModule} from '@ironsource/fusion-ui/components/dropdown-option/v2';
import {DropdownSearchModule} from '@ironsource/fusion-ui/components/dropdown-search/v2';
import {DropdownSelectModule} from '@ironsource/fusion-ui/components/dropdown-select/v2';
import {DropdownService} from '@ironsource/fusion-ui/components/dropdown/service';
import {DropdownComponent} from './dropdown.component';
import {AttributionService} from "@ironsource/fusion-ui/services/attribution";

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

describe('DropdownComponent', () => {
    let component: DropdownComponent;
    let fixture: ComponentFixture<DropdownComponent>;
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
                DropdownOptionsListModule,
                DropdownOptionModule,
                DropdownSearchModule,
                DropdownSelectModule
            ],
            declarations: [DropdownComponent],
            providers: [
                FilterByFieldPipe,
                ClonePipe,
                AttributionService,
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
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DropdownComponent);
        component = fixture.componentInstance;
        component.options = optionMock;
        component.optionsRenderByHover = false;
        fixture.detectChanges();
        debugEl = fixture.debugElement;
        el = debugEl.nativeElement;
        component.ngOnInit();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('Must render DOM Elements', () => {
        expect(fixture.debugElement.query(By.css('.is-dropdown-select'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.is-dropdown-select label')).nativeElement.innerText.trim()).toBe('Please Select');

        expect(fixture.debugElement.query(By.css('.options-dropdown'))).toBeTruthy();

        const optionsHolderEl: DebugElement = fixture.debugElement.query(By.css('ul.options fusion-dropdown-options-list'));
        expect(optionsHolderEl).toBeTruthy();
        expect(optionsHolderEl.nativeElement.innerHTML).not.toContain('<li class="no-results">No results</li>');
        expect(optionsHolderEl.nativeElement.children.length).toBe(optionMock.length);

        for (let idx = 0; idx < optionsHolderEl.nativeElement.children.length; idx++) {
            const itemEl = optionsHolderEl.nativeElement.children[idx];
            const iconEl = itemEl.querySelector(`fusion-icon.${optionMock[idx].icon}`);
            expect(iconEl).toBeTruthy();
            expect(itemEl.innerText).toContain(`${optionMock[idx].id} ${optionMock[idx].title}`);
        }

        const loaderLiEl: DebugElement = fixture.debugElement.query(By.css('ul.options li.is-hidden'));
        expect(loaderLiEl).toBeTruthy();
    });

    it('Should rendered with placeholder text that we provide" ', () => {
        component.placeholder = 'Test Placeholder';
        component.icon = 'anchor';
        component.ngOnInit();
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('.is-dropdown-select label')).nativeElement.innerText).toContain('Test Placeholder');
    });

    it('Should rendered "disabled", by provide parameter', () => {
        component.options = optionMock;
        component.isDisabled = true;
        fixture.detectChanges();

        expect(fixture.debugElement.query(By.css('div.options-dropdown')).nativeElement.classList).toContain('dd-disabled');
    });

    /*it('Should be opened by click on closed by "onOutsideClick"', () => {
        fixture.componentRef.changeDetectorRef.detectChanges();
        fixture.debugElement
            .query(By.css('fusion-dropdown-select'))
            .triggerEventHandler('click', {target: fixture.debugElement.query(By.css('fusion-dropdown-select')).nativeElement});
        fixture.componentRef.changeDetectorRef.detectChanges();
        expect(fixture.debugElement.query(By.css('.is-dropdown')).nativeElement.classList).toContain('dd-opened');

        component.onOutsideClick();
        component.cdr.detectChanges();
        expect(fixture.debugElement.query(By.css('.is-dropdown')).nativeElement.classList).not.toContain('dd-opened');
    });*/

    /*it('Should emit "closed" event by "onOutsideClick"', () => {
        fixture.componentRef.changeDetectorRef.detectChanges();
        fixture.debugElement
            .query(By.css('fusion-dropdown-select'))
            .triggerEventHandler('click', {target: fixture.debugElement.query(By.css('fusion-dropdown-select')).nativeElement});
        fixture.componentRef.changeDetectorRef.detectChanges();
        expect(fixture.debugElement.query(By.css('.is-dropdown')).nativeElement.classList).toContain('dd-opened');

        // spyOn(component.closed, 'emit');
        // component.onOutsideClick();
        // expect(component.closed.emit).toHaveBeenCalledOnceWith({clickOutside: true});
    });*/

    /*it('Should be change placeholder by click on selected item and close dropdown on select', () => {
        fixture.debugElement
            .query(By.css('fusion-dropdown-select'))
            .triggerEventHandler('click', {target: fixture.debugElement.query(By.css('fusion-dropdown-select')).nativeElement});
        fixture.detectChanges();

        expect(fixture.debugElement.query(By.css('.is-dropdown')).nativeElement.classList).toContain('dd-opened');
        const optionsEl = fixture.debugElement.query(By.css('ul.options  fusion-dropdown-options-list'));
        optionsEl.children[0].triggerEventHandler('click', null);
        fixture.detectChanges();

        const expected = `${optionMock[0].title}`;
        expect(fixture.debugElement.query(By.css('.is-dropdown-select label')).nativeElement.innerText).toContain(expected);

        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('.is-dropdown')).nativeElement.classList).not.toContain('dd-opened');

        expect(component.selected).toEqual([{...optionMock[0], isSelected: true}]);
    });*/

    /*it('Should emit "closed" event by close options', () => {
        fixture.debugElement
            .query(By.css('fusion-dropdown-select'))
            .triggerEventHandler('click', {target: fixture.debugElement.query(By.css('fusion-dropdown-select')).nativeElement});
        fixture.detectChanges();

        // spyOn(component.closed, 'emit');

        // expect(fixture.debugElement.query(By.css('.is-dropdown')).nativeElement.classList).toContain('dd-opened');
        // const optionsEl = fixture.debugElement.query(By.css('ul.options  fusion-dropdown-options-list'));
        // optionsEl.children[0].triggerEventHandler('click', null);
        // fixture.detectChanges();
        //
        // expect(component.closed.emit).toHaveBeenCalledOnceWith({clickOutside: false});
    });*/
});
