import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DropdownDualMultiSelectBodyItemComponent} from './dropdown-dual-multi-select-body-item.component';
import {DropdownDualMultiSelectBodyModule} from '../dropdown-dual-multi-select-body.module';
import {DropdownOption} from '../../../dropdown/entities/dropdown-option';

export const MOCK_ITEM: DropdownOption = {id: 1, title: 'Mario Speedwagon', isDisabled: true};

describe('DropdownDualMultiSelectBodyItemComponent', () => {
    let component: DropdownDualMultiSelectBodyItemComponent;
    let fixture: ComponentFixture<DropdownDualMultiSelectBodyItemComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [DropdownDualMultiSelectBodyItemComponent],
            imports: [DropdownDualMultiSelectBodyModule]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DropdownDualMultiSelectBodyItemComponent);
        component = fixture.componentInstance;
        component['item'] = MOCK_ITEM;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
