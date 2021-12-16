import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {ColorsServiceDocsComponent} from './colors-service-docs.component';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';

describe('ColorsServiceDocsComponent', () => {
    let component: ColorsServiceDocsComponent;
    let fixture: ComponentFixture<ColorsServiceDocsComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                imports: [ExampleBlockModule, CodeBlockModule, DocsMenuModule],
                declarations: [ColorsServiceDocsComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(ColorsServiceDocsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
