import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DropdownSearchComponent} from './dropdown-search.component';
import {InputModule} from "@ironsource/fusion-ui/components/input/v1";

describe('DropdownSearchComponent', () => {
    let component: DropdownSearchComponent;
    let fixture: ComponentFixture<DropdownSearchComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [DropdownSearchComponent],
            imports: [InputModule]
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
