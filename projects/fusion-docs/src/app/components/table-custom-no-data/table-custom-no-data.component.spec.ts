import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TableCustomNoDataComponent} from './table-custom-no-data.component';

describe('TableCustomNoDataComponent', () => {
    let component: TableCustomNoDataComponent;
    let fixture: ComponentFixture<TableCustomNoDataComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TableCustomNoDataComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TableCustomNoDataComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
