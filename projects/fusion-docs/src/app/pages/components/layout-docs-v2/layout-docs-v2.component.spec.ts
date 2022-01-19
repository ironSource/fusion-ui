import {ComponentFixture, TestBed} from '@angular/core/testing';
import {LayoutDocsV2Component} from './layout-docs-v2.component';
import {ReactiveFormsModule} from '@angular/forms';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {LayoutModule, TableModule} from '@ironsource/fusion-ui';
import {RouterTestingModule} from '@angular/router/testing';

describe('LayoutDocsV2Component', () => {
    let component: LayoutDocsV2Component;
    let fixture: ComponentFixture<LayoutDocsV2Component>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LayoutDocsV2Component],
            imports: [
                ReactiveFormsModule,
                DocsMenuModule,
                ExampleBlockModule,
                CodeBlockModule,
                LayoutModule,
                TableModule,
                RouterTestingModule.withRoutes([
                    {
                        path: 'docs/components/layout',
                        loadChildren: () => import('.././layout-docs/layout-docs.module').then(m => m.LayoutDocsModule)
                    }
                ])
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LayoutDocsV2Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
