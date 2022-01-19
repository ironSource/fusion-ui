import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {TableDocsComponent} from './table-docs.component';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {Router, RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {AlertModule, IconModule, TableModule} from '@ironsource/fusion-uifusion-ui';
import {NgModule, Injectable} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TableCellIconExampleComponent} from '../../../components/table-cell-icon-exmpale';

@Injectable()
class RouterStub {
    url = '';
    navigate(commands: any[], extras?: any) {}
}

@NgModule({
    declarations: [TableCellIconExampleComponent],
    imports: [CommonModule, IconModule],
    providers: [{provide: Router, useClass: RouterStub}]
})
export class TableCellIconExampleModule {}

describe('TableDocsComponent', () => {
    let component: TableDocsComponent;
    let fixture: ComponentFixture<TableDocsComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [TableDocsComponent],
                imports: [
                    ExampleBlockModule,
                    CodeBlockModule,
                    DocsMenuModule,
                    RouterModule,
                    ReactiveFormsModule,
                    TableModule,
                    IconModule,
                    AlertModule,
                    TableCellIconExampleModule
                ]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(TableDocsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
