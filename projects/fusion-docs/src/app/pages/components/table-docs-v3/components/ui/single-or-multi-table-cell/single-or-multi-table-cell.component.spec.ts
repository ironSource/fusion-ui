import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FlagModule} from '@ironsource/fusion-ui/components/flag/v1';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip/v2';
import {SingleOrMultiTableCellComponent} from './single-or-multi-table-cell.component';

describe('SingleOrMultiTableCellComponent', () => {
    let component: SingleOrMultiTableCellComponent;
    let fixture: ComponentFixture<SingleOrMultiTableCellComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FlagModule, TooltipModule],
            declarations: [SingleOrMultiTableCellComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SingleOrMultiTableCellComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
