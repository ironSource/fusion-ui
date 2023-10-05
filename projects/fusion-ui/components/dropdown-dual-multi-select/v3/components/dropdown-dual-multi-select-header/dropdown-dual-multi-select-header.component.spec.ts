import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DropdownDualMultiSelectHeaderComponent} from './dropdown-dual-multi-select-header.component';
import {GenericPipe} from "@ironsource/fusion-ui/pipes/generic";

describe('DropdownDualMultiSelectHeaderComponent', () => {
    let component: DropdownDualMultiSelectHeaderComponent;
    let fixture: ComponentFixture<DropdownDualMultiSelectHeaderComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [DropdownDualMultiSelectHeaderComponent],
            imports:[GenericPipe]
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
