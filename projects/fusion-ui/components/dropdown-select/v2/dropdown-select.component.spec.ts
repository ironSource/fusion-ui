import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DropdownSelectComponent} from './dropdown-select.component';
import {IconModule} from "@ironsource/fusion-ui/components/icon/v1";
import {TooltipModule} from "@ironsource/fusion-ui/components/tooltip/v2";

describe('DropdownSelectComponent', () => {
    let component: DropdownSelectComponent;
    let fixture: ComponentFixture<DropdownSelectComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [DropdownSelectComponent],
            imports: [IconModule, TooltipModule]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DropdownSelectComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
