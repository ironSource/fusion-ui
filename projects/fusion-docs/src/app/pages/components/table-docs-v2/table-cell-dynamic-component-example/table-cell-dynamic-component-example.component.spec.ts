import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {TableCellDynamicComponentExampleComponent} from './table-cell-dynamic-component-example.component';
import {StatusLabelModule} from '@ironsrc/fusion-ui';

describe('TableCellDynamicComponentExampleComponent', () => {
    let component: TableCellDynamicComponentExampleComponent;
    let fixture: ComponentFixture<TableCellDynamicComponentExampleComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [TableCellDynamicComponentExampleComponent],
                imports: [StatusLabelModule]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(TableCellDynamicComponentExampleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
