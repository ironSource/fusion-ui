import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {ChartDocsV2Component} from './chart-docs-v2.component';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {ChartLabelsModule} from '@ironsource/fusion-ui/components/chart-labels/v2';
import {ChartModule} from '@ironsource/fusion-ui/components/chart/v2';
import {Router} from '@angular/router';
import {ClonePipe} from "@ironsource/fusion-ui/pipes/clone";

class RouterStub {
    url = '';
    navigate(commands: any[], extras?: any) {}
}

describe('ChartDocsV2Component', () => {
    let component: ChartDocsV2Component;
    let fixture: ComponentFixture<ChartDocsV2Component>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ChartDocsV2Component],
            imports: [DocsMenuModule, CodeBlockModule, ExampleBlockModule, ChartModule, ChartLabelsModule],
            providers: [{provide: Router, useClass: RouterStub}, ClonePipe]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ChartDocsV2Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
