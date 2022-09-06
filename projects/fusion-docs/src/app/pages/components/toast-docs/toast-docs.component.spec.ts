import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {ToastDocsComponent} from './toast-docs.component';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {ToastExampleContentModule} from '../../../components/toast-example-content/toast-example-content.module';
import {ButtonModule} from '@ironsource/fusion-ui/components/button/v2';
import {ToastModule} from '@ironsource/fusion-ui/components/toast/v2';

describe('ToastDocsComponent', () => {
    let component: ToastDocsComponent;
    let fixture: ComponentFixture<ToastDocsComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ToastDocsComponent],
            imports: [ExampleBlockModule, CodeBlockModule, DocsMenuModule, ButtonModule, ToastModule, ToastExampleContentModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ToastDocsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
