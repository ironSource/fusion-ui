import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TabsDocsComponent} from './tabs-docs.component';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {TabsModule} from '@ironsource/fusion-ui';

describe('TabsDocsComponent', () => {
    let component: TabsDocsComponent;
    let fixture: ComponentFixture<TabsDocsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TabsDocsComponent],
            imports: [ExampleBlockModule, CodeBlockModule, DocsMenuModule, TabsModule]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TabsDocsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
