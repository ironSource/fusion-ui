import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AdvEntityTableCellComponent} from './adv-entity-table-cell.component';

describe('AdvEntityTableCellComponent', () => {
    let component: AdvEntityTableCellComponent;
    let fixture: ComponentFixture<AdvEntityTableCellComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AdvEntityTableCellComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AdvEntityTableCellComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
