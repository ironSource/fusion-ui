import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DropdownSearchComponent} from './dropdown-search.component';
import {InputModule} from "@ironsource/fusion-ui/components/input/v2";
import {ReactiveFormsModule} from "@angular/forms";
import {IconModule} from "@ironsource/fusion-ui/components/icon/v1";

describe('DropdownSearchComponent', () => {
    let component: DropdownSearchComponent;
    let fixture: ComponentFixture<DropdownSearchComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [DropdownSearchComponent],
            imports: [ReactiveFormsModule, InputModule, IconModule]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DropdownSearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
