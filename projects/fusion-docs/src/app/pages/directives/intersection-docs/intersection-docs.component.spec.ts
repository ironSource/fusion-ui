import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {IntersectionDocsComponent} from './intersection-docs.component';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {IntersectionModule} from '@ironsource/fusion-ui';
import {AlertModule} from '@ironsource/fusion-ui/components/alert/v2';
import {InputModule} from '@ironsource/fusion-ui/components/input/v2';
import {ButtonModule} from '@ironsource/fusion-ui/components/button/v2';

describe('IntersectionDocsComponent', () => {
    let component: IntersectionDocsComponent;
    let fixture: ComponentFixture<IntersectionDocsComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [IntersectionDocsComponent],
            imports: [
                ExampleBlockModule,
                CodeBlockModule,
                DocsMenuModule,
                RouterModule,
                ReactiveFormsModule,
                IntersectionModule,
                AlertModule,
                InputModule,
                ButtonModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(IntersectionDocsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
