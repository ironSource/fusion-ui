import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DropdownDualMultiSelectFooterComponent} from './dropdown-dual-multi-select-footer.component';
import {GenericPipe} from "@ironsource/fusion-ui/pipes/generic";

describe('DropdownDualMultiSelectFooterComponent', () => {
    let component: DropdownDualMultiSelectFooterComponent;
    let fixture: ComponentFixture<DropdownDualMultiSelectFooterComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [DropdownDualMultiSelectFooterComponent],
            imports: [GenericPipe]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DropdownDualMultiSelectFooterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
