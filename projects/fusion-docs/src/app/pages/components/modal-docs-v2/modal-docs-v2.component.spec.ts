import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {ModalDocsV2Component} from './modal-docs-v2.component';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {Router} from '@angular/router';
import {NotificationModule} from '@ironsource/fusion-ui/components/notification/v2';
import {ModalModule} from '@ironsource/fusion-ui/components/modal/v2';
import {LoaderModule} from '@ironsource/fusion-ui/components/loader/v2';

class RouterStub {
    url = '';
    navigate(commands: any[], extras?: any) {}
}

describe('ModalDocsV2Component', () => {
    let component: ModalDocsV2Component;
    let fixture: ComponentFixture<ModalDocsV2Component>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [ModalDocsV2Component],
                imports: [ExampleBlockModule, CodeBlockModule, DocsMenuModule, NotificationModule, ModalModule, LoaderModule],
                providers: [{provide: Router, useClass: RouterStub}]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(ModalDocsV2Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
