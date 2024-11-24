import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TableEmptyComponent} from './table-empty.component';
import {Component, DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';

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

describe('TestTableRowEmptyComponent', () => {
    let component: TestTableRowEmptyComponent;
    let fixture: ComponentFixture<TestTableRowEmptyComponent>;
    let debugEl: DebugElement;
    let buttonEl: DebugElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [IconModule],
            declarations: [TestTableRowEmptyComponent, TableEmptyComponent]
        });

        fixture = TestBed.createComponent(TestTableRowEmptyComponent);

        component = fixture.componentInstance;

        debugEl = fixture.debugElement;
        buttonEl = debugEl.query(By.css('button'));

        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
