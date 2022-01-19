import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {LayoutDocsComponent} from './layout-docs.component';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {AlertModule, LayoutV1Module, TableModule} from '@ironource/fusion-ui';
import {RouterTestingModule} from '@angular/router/testing';

describe('LayoutDocsComponent', () => {
    let component: LayoutDocsComponent;
    let fixture: ComponentFixture<LayoutDocsComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [LayoutDocsComponent],
                imports: [
                    DocsMenuModule,
                    ExampleBlockModule,
                    CodeBlockModule,
                    AlertModule,
                    LayoutV1Module,
                    TableModule,
                    RouterTestingModule.withRoutes([
                        {
                            path: 'docs/components/v2/layout',
                            loadChildren: () => import('.././layout-docs-v2/layout-docs-v2.module').then(m => m.LayoutDocsV2Module)
                        }
                    ])
                ]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(LayoutDocsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
