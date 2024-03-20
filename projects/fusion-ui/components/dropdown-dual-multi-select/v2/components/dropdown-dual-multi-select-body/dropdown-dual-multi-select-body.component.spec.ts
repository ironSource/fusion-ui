import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DropdownDualMultiSelectBodyComponent} from './dropdown-dual-multi-select-body.component';
import {GetObjectLengthPipe} from '@ironsource/fusion-ui/pipes/collection';
import {GenericPipe} from "@ironsource/fusion-ui/pipes/generic";
import {CheckboxModule} from "@ironsource/fusion-ui/components/checkbox/v2";

describe('DropdownDualMultiSelectBodyComponent', () => {
    let component: DropdownDualMultiSelectBodyComponent;
    let fixture: ComponentFixture<DropdownDualMultiSelectBodyComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [DropdownDualMultiSelectBodyComponent],
            imports: [GetObjectLengthPipe, GenericPipe, CheckboxModule]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DropdownDualMultiSelectBodyComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
