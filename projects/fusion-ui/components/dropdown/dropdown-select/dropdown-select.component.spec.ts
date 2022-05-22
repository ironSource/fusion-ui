import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {DropdownSelectComponent} from './dropdown-select.component';
import {DynamicComponentsModule} from '@ironsource/fusion-ui/components/dynamic-components';
import {IconModule} from '@ironsource/fusion-ui/components/icon';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip';
import {ReactiveFormsModule} from '@angular/forms';
import {DropdownSearchOldModule} from '../dropdown-search/dropdown-search.module';
import {FlagModule} from '@ironsource/fusion-ui/components/flag';

describe('DropdownSelectComponent', () => {
    let component: DropdownSelectComponent;
    let fixture: ComponentFixture<DropdownSelectComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [DropdownSelectComponent],
                imports: [DynamicComponentsModule, IconModule, TooltipModule, ReactiveFormsModule, DropdownSearchOldModule, FlagModule]
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
