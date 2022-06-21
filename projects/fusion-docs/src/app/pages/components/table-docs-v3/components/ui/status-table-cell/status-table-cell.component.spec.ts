import {CommonModule} from '@angular/common';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {IconStatusModule} from '@ironsource/fusion-ui/components/icon-status/v1';
import {StatusTableCellComponent} from './status-table-cell.component';

describe('StatusTableCellComponent', () => {
    let component: StatusTableCellComponent;
    let fixture: ComponentFixture<StatusTableCellComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CommonModule, IconStatusModule, IconModule],
            declarations: [StatusTableCellComponent],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(StatusTableCellComponent);
        component = fixture.componentInstance;
        component.config = {
            displayText: '',
            defaultColor: '',
            displayPauseButton: false,
            id: 1,
            entityId: 1
        };
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
