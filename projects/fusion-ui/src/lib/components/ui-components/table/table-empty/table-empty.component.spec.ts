import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TableEmptyComponent} from './table-empty.component';
import {Component, DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {IconModule} from '../../icon/icon.module';

// do dummy component - holder
@Component({
    template: `
        <table>
            <tr [fusionTableEmpty]="colsSpan" [header]="noDataMessage" [subHeader]="noDataSubMessage"></tr>
        </table>
    `
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
