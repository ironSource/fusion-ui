import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {SwitchersDocsComponent} from './switchers-docs.component';
import {ReactiveFormsModule} from '@angular/forms';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {SwitcherModule} from '@ironsource/fusion-uifusion-ui';
import {Router} from '@angular/router';

class RouterStub {
    url = '';
    navigate(commands: any[], extras?: any) {}
}

describe('SwitchersDocsComponent', () => {
    let component: SwitchersDocsComponent;
    let fixture: ComponentFixture<SwitchersDocsComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [SwitchersDocsComponent],
                imports: [ReactiveFormsModule, DocsMenuModule, ExampleBlockModule, CodeBlockModule, SwitcherModule],
                providers: [{provide: Router, useClass: RouterStub}]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(SwitchersDocsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
