import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {ChipFilterComponent} from './chip-filter.component';
import {TooltipModule, IconModule, FlagModule} from '@ironsource/fusion-ui';

describe('ChipFilterComponent', () => {
    let component: ChipFilterComponent;
    let fixture: ComponentFixture<ChipFilterComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                imports: [IconModule, FlagModule, TooltipModule],
                declarations: [ChipFilterComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(ChipFilterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
