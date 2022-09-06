import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {DropdownOptionComponent} from './dropdown-option.component';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip';
import {FlagModule} from '@ironsource/fusion-ui/components/flag/v1';
import {GenericPipeModule} from '@ironsource/fusion-ui/pipes/generic';
import {DropdownOptionDirective} from './dropdown-option.directive';
import {DropdownService} from '@ironsource/fusion-ui/components/dropdown/service';

describe('DropdownOptionComponent', () => {
    let component: DropdownOptionComponent;
    let fixture: ComponentFixture<DropdownOptionComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [IconModule, TooltipModule, FlagModule, GenericPipeModule],
            declarations: [DropdownOptionComponent, DropdownOptionDirective],
            providers: [DropdownService]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DropdownOptionComponent);
        component = fixture.componentInstance;
        component.option = {id: 1, subText: {text: 'text'}};
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
