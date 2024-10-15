import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {ReactiveFormsModule} from '@angular/forms';
import {ClickOutsideModule} from '@ironsource/fusion-ui/directives/click-outside';
import {TableCellComponent} from './table-cell.component';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {TableService} from "@ironsource/fusion-ui/components/table/common/services";
import {NotAvailablePipe} from "@ironsource/fusion-ui/pipes/not-available";



describe('TableCellComponent', () => {
    let component: TableCellComponent;
    let fixture: ComponentFixture<TableCellComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [
                TableCellComponent,
                IconModule,
                ClickOutsideModule,
                ReactiveFormsModule,
                NotAvailablePipe
            ],
            providers: [TableService]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TableCellComponent);
        component = fixture.componentInstance;
        component.options = {};
        component.column = {key: 'a'};
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
