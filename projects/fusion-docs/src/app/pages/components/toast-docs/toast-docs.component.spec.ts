import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {ToastDocsComponent} from './toast-docs.component';
import {ButtonModule, ToastModule} from '@ironsrc/fusion-ui';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {ToastExampleContentModule} from '../../../components/toast-example-content/toast-example-content.module';

describe('ToastDocsComponent', () => {
    let component: ToastDocsComponent;
    let fixture: ComponentFixture<ToastDocsComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [ToastDocsComponent],
                imports: [ExampleBlockModule, CodeBlockModule, DocsMenuModule, ButtonModule, ToastModule, ToastExampleContentModule]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(ToastDocsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
