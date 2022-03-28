import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DropdownDualMultiSelectBodyComponent} from './dropdown-dual-multi-select-body.component';
import {GetObjectLengthModule} from '@ironsource/fusion-ui/pipes';

describe('DropdownDualMultiSelectBodyComponent', () => {
    let component: DropdownDualMultiSelectBodyComponent;
    let fixture: ComponentFixture<DropdownDualMultiSelectBodyComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [DropdownDualMultiSelectBodyComponent],
            imports: [GetObjectLengthModule]
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
