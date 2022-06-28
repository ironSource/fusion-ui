import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TooltipedEntitiesTableCellComponent} from './tooltiped-entities-table-cell.component';

describe('TooltipedEntitiesTableCellComponent', () => {
    let component: TooltipedEntitiesTableCellComponent;
    let fixture: ComponentFixture<TooltipedEntitiesTableCellComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TooltipedEntitiesTableCellComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TooltipedEntitiesTableCellComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
