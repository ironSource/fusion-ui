import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {DropdownSelectComponent} from './dropdown-select.component';
import {DynamicComponentsModule} from '../../dynamic-components/dynamic-components.module';
import {IconModule} from '../../icon/icon.module';
import {TooltipModule} from '../../tooltip/tooltip.module';
import {ReactiveFormsModule} from '@angular/forms';
import {DropdownSearchModule} from '../dropdown-search/dropdown-search.module';
import {FlagModule} from '../../flag/flag.module';

describe('DropdownSelectComponent', () => {
    let component: DropdownSelectComponent;
    let fixture: ComponentFixture<DropdownSelectComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [DropdownSelectComponent],
                imports: [DynamicComponentsModule, IconModule, TooltipModule, ReactiveFormsModule, DropdownSearchModule, FlagModule]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(DropdownSelectComponent);
        component = fixture.componentInstance;
        component.configurations = {dropdownArrowIconName: {iconName: 'arrow-dropdown', iconVersion: 'v1'}};
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
