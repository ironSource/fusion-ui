import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {DropdownDualMultiSelectComponent} from './dropdown-dual-multi-select.component';
import {By} from '@angular/platform-browser';
import {DropdownOption} from '../dropdown/entities/dropdown-option';
import {CommonModule} from '@angular/common';
import {IconModule} from '../icon/icon.module';
import {ButtonModule} from '../button/button.module';
import {InputModule} from '../input/input.module';
import {CheckboxModule} from '../checkbox/checkbox.module';
import {ReactiveFormsModule} from '@angular/forms';
import {ClickOutsideModule} from '../../../directives/click-outside/click-outside.module';
import {DynamicComponentsModule} from '../dynamic-components/dynamic-components.module';
import {DropdownDualMultiSelectBodyModule} from './dropdown-dual-multi-select-body/dropdown-dual-multi-select-body.module';
import {DropdownDualMultiSelectHeaderModule} from './dropdown-dual-multi-select-header/dropdown-dual-multi-select-header.module';
import {DropdownDualMultiSelectFooterModule} from './dropdown-dual-multi-select-footer/dropdown-dual-multi-select-footer.module';
import {DropdownDualMultiSelectLoadingModule} from './dropdown-dual-multi-select-loading/dropdown-dual-multi-select-loading.module';
import {Component} from '@angular/core';
import {MOCK_DUAL_ITEMS} from './mock-entities';

@Component({
    template: ` <div class="outside"></div> `
})
class TestComponent {
    clickOutside(): void {}
}

describe('DropdownDualMultiSelectComponent', () => {
    let component: DropdownDualMultiSelectComponent;
    let fixture: ComponentFixture<DropdownDualMultiSelectComponent>;
    let testFixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [DropdownDualMultiSelectComponent, TestComponent],
            imports: [
                CommonModule,
                IconModule,
                ButtonModule,
                InputModule,
                CheckboxModule,
                ReactiveFormsModule,
                ClickOutsideModule,
                DynamicComponentsModule,
                DropdownDualMultiSelectBodyModule,
                DropdownDualMultiSelectHeaderModule,
                DropdownDualMultiSelectFooterModule,
                DropdownDualMultiSelectLoadingModule
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DropdownDualMultiSelectComponent);
        testFixture = TestBed.createComponent(TestComponent);
        component = fixture.componentInstance;
        component.items = MOCK_DUAL_ITEMS;
        component.placeholder = 'Search Item';
        component.preSelectedItems.setValue([]);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('Must render DOM Elements', () => {
        expect(fixture.debugElement.query(By.css('.is-dropdown-dual-multi-select'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.dropdown-dual-multi-select-layout'))).toBeFalsy();
        expect(fixture.debugElement.query(By.css('.dropdown-dual-multi-select-button')).nativeElement.innerText.trim()).toBe('Search Item');
    });

    it('Should be put loading on all element when no data provided in "items" input', () => {
        component.pendingItems = true;
        fixture.debugElement
            .query(By.css('.dual-select-button'))
            .triggerEventHandler('click', {target: fixture.debugElement.query(By.css('.dual-select-button')).nativeElement});
        fixture.detectChanges();
        expect(component.opened$.getValue()).toBe(true);
        expect(fixture.debugElement.query(By.css('.dropdown-dual-multi-select-layout'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.fu-multiselect-list-loader'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.content-col-right .body-header .fu-select-label')).nativeElement.innerText).toBe(
            ' 0 selected '
        );
    });

    it('Should be opened by click when closed by "onOutsideClick"', () => {
        component.items = MOCK_DUAL_ITEMS;

        fixture.debugElement
            .query(By.css('.dual-select-button'))
            .triggerEventHandler('click', {target: fixture.debugElement.query(By.css('.dual-select-button')).nativeElement});
        fixture.detectChanges();

        expect(component.opened$.getValue()).toBe(true);
        expect(fixture.debugElement.query(By.css('.dropdown-dual-multi-select-layout'))).toBeTruthy();
        fixture.detectChanges();

        component.items = MOCK_DUAL_ITEMS;
        const outside = testFixture.debugElement.query(By.css('.outside')).nativeElement;
        component['onOutsideClick'](outside);

        fixture.detectChanges();
        expect(component.opened$.getValue()).toBe(false);
        expect(fixture.debugElement.query(By.css('.dropdown-dual-multi-select-layout'))).toBeFalsy();
    });

    it('Should be change placeholder value when select item and close overlay', async () => {
        fixture.debugElement
            .query(By.css('.dual-select-button'))
            .triggerEventHandler('click', {target: fixture.debugElement.query(By.css('.dual-select-button')).nativeElement});
        fixture.detectChanges();

        expect(component.opened$.getValue()).toBe(true);
        expect(fixture.debugElement.query(By.css('.dropdown-dual-multi-select-layout'))).toBeTruthy();
        fixture.detectChanges();

        fixture.debugElement.query(By.css('.is-option-label.left-side')).triggerEventHandler('click', {
            target: fixture.debugElement.query(By.css('.is-option-label.left-side')).nativeElement
        });
        fixture.detectChanges();

        fixture.debugElement.query(By.css('.transparent.primary')).triggerEventHandler('click', {
            target: fixture.debugElement.query(By.css('.transparent.primary')).nativeElement
        });
        component.writeValue([component.items$.getValue()[0]]);
        fixture.detectChanges();

        expect(component.opened$.getValue()).toBe(false);
        expect(fixture.debugElement.query(By.css('.dropdown-dual-multi-select-layout'))).toBeFalsy();
        expect(fixture.debugElement.query(By.css('.dropdown-dual-multi-select-button')).nativeElement.innerText.trim()).toBe(
            `${component.preSelectedItems.value.length} selected`
        );
    });
});
