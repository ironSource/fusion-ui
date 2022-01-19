import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {ChartDocsComponent} from './chart-docs.component';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {ChartLabelsModule, ChartModule} from '@ironsource/fusion-uifusion-ui';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {RouterTestingModule} from '@angular/router/testing';
import {Router} from '@angular/router';

class RouterStub {
    url = '';
    navigate(commands: any[], extras?: any) {}
}

describe('ChartDocsComponent', () => {
    let component: ChartDocsComponent;
    let fixture: ComponentFixture<ChartDocsComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                imports: [DocsMenuModule, CodeBlockModule, ExampleBlockModule, ChartModule, ChartLabelsModule, RouterTestingModule],
                declarations: [ChartDocsComponent],
                providers: [{provide: Router, useClass: RouterStub}]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(ChartDocsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
