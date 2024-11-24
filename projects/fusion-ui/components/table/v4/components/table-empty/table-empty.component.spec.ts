import {ComponentFixture, TestBed} from '@angular/core/testing';
import {Component, DebugElement} from '@angular/core';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {EmptyStateComponent} from '@ironsource/fusion-ui/components/empty-state';
import {DynamicComponentsModule} from '@ironsource/fusion-ui/components/dynamic-components/v1';
import {TableEmptyComponent} from './table-empty.component';

// do dummy component - holder
@Component({
    template: `
        <table>
            <tr [fusionTableEmpty]="colsSpan" [header]="noDataMessage" [subHeader]="noDataSubMessage"></tr>
        </table>
    `,
    standalone: false
})
class TestTableRowEmptyComponent {
    public colsSpan = 1;
    public noDataMessage = '';
    public noDataSubMessage = '';
}

describe('TableEmptyComponent', () => {
    let component: TableEmptyComponent;
    let fixture: ComponentFixture<TableEmptyComponent>;
    let debugEl: DebugElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [TableEmptyComponent, EmptyStateComponent, IconModule, DynamicComponentsModule]
        });

        fixture = TestBed.createComponent(TableEmptyComponent);

        component = fixture.componentInstance;

        debugEl = fixture.debugElement;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
