import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DropdownDualMultiSelectHeaderComponent} from './dropdown-dual-multi-select-header.component';
import {IconModule} from "@ironsource/fusion-ui/components/icon/v1";
import {ReactiveFormsModule} from "@angular/forms";
import {InputModule} from "@ironsource/fusion-ui/components/input/v2";

describe('DropdownDualMultiSelectHeaderComponent', () => {
    let component: DropdownDualMultiSelectHeaderComponent;
    let fixture: ComponentFixture<DropdownDualMultiSelectHeaderComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [DropdownDualMultiSelectHeaderComponent],
            imports: [IconModule, ReactiveFormsModule, InputModule]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DropdownDualMultiSelectHeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
