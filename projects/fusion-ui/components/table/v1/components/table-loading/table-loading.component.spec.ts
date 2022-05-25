import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TableLoadingComponent} from './table-loading.component';
import {Component, CUSTOM_ELEMENTS_SCHEMA, DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

// do dummy component - holder
@Component({
    template: `
        <table>
            <tr [fusionTableLoading]="1"></tr>
        </table>
    `
})
class TestTableLoadingComponent {}

describe('TestTableEmptyComponent', () => {
    let component: TestTableLoadingComponent;
    let fixture: ComponentFixture<TestTableLoadingComponent>;
    let debugEl: DebugElement;
    let buttonEl: DebugElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            declarations: [TestTableLoadingComponent, TableLoadingComponent]
        });

        fixture = TestBed.createComponent(TestTableLoadingComponent);

        component = fixture.componentInstance;

        debugEl = fixture.debugElement;
        buttonEl = debugEl.query(By.css('button'));

        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
