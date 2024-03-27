import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DropdownDualMultiSelectHeaderComponent} from './dropdown-dual-multi-select-header.component';
import {GenericPipe} from "@ironsource/fusion-ui/pipes/generic";
import {IconModule} from "@ironsource/fusion-ui/components/icon/v1";
import {ReactiveFormsModule} from "@angular/forms";

describe('DropdownDualMultiSelectHeaderComponent', () => {
    let component: DropdownDualMultiSelectHeaderComponent;
    let fixture: ComponentFixture<DropdownDualMultiSelectHeaderComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [DropdownDualMultiSelectHeaderComponent],
            imports:[GenericPipe, IconModule, ReactiveFormsModule]
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
