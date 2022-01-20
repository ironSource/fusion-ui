import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {DropdownOptionComponent} from './dropdown-option.component';
import {IconModule} from '../../icon/icon.module';
import {TooltipModule} from '../../tooltip/tooltip.module';
import {FlagModule} from '../../flag/flag.module';
import {DropdownOptionDirective} from './dropdown-option.component';
import {DropdownService} from '../dropdown.service';
import {GenericPipeModule} from '../../../../pipes/generic/generic.module';

describe('DropdownOptionComponent', () => {
    let component: DropdownOptionComponent;
    let fixture: ComponentFixture<DropdownOptionComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                imports: [IconModule, TooltipModule, FlagModule, GenericPipeModule],
                declarations: [DropdownOptionComponent, DropdownOptionDirective],
                providers: [DropdownService]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(DropdownOptionComponent);
        component = fixture.componentInstance;
        component.option = {id: 1};
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
