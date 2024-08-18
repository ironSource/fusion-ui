import {ComponentFixture, TestBed} from '@angular/core/testing';
import {Component, CUSTOM_ELEMENTS_SCHEMA, DebugElement} from '@angular/core';
import {TableLoadingComponent} from './table-loading.component';

// do dummy component - holder
@Component({
    standalone: true,
    imports: [TableLoadingComponent],
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

    beforeEach(() => {
        TestBed.configureTestingModule({
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            imports: [TestTableLoadingComponent, TableLoadingComponent]
        });

        fixture = TestBed.createComponent(TestTableLoadingComponent);

        component = fixture.componentInstance;

        debugEl = fixture.debugElement;

        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
