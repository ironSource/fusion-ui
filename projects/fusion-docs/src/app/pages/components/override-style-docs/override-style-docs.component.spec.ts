import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {OverrideStyleDocsComponent} from './override-style-docs.component';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {AlertModule} from '@ironource/fusion-ui';

describe('OverrideStyleDocsComponent', () => {
    let component: OverrideStyleDocsComponent;
    let fixture: ComponentFixture<OverrideStyleDocsComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [OverrideStyleDocsComponent],
                imports: [ExampleBlockModule, CodeBlockModule, AlertModule]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(OverrideStyleDocsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
