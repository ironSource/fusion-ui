import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {ModalDocsComponent} from './modal-docs.component';
import {ModalDocsRoutingModule} from './modal-docs-routing.module';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {InputModule, LoaderModule, ModalModule, NotificationModule} from '@ironsource/fusion-uifusion-ui';
import {ReactiveFormsModule} from '@angular/forms';
import {Router} from '@angular/router';

class RouterStub {
    url = '';
    navigate(commands: any[], extras?: any) {}
}

describe('ModalComponent', () => {
    let component: ModalDocsComponent;
    let fixture: ComponentFixture<ModalDocsComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [ModalDocsComponent],
                imports: [
                    ModalDocsRoutingModule,
                    ExampleBlockModule,
                    CodeBlockModule,
                    DocsMenuModule,
                    InputModule,
                    LoaderModule,
                    ModalModule,
                    NotificationModule,
                    ReactiveFormsModule
                ],
                providers: [{provide: Router, useClass: RouterStub}]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(ModalDocsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
