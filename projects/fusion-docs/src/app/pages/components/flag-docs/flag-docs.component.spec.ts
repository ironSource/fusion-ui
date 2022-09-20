import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {FlagDocsComponent} from './flag-docs.component';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {FlagModule} from '@ironsource/fusion-ui/components/flag/v1';
import {RouterModule} from '@angular/router';

describe('FlagDocsComponent', () => {
    let component: FlagDocsComponent;
    let fixture: ComponentFixture<FlagDocsComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [FlagDocsComponent],
            imports: [ExampleBlockModule, CodeBlockModule, DocsMenuModule, FlagModule, RouterModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FlagDocsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
