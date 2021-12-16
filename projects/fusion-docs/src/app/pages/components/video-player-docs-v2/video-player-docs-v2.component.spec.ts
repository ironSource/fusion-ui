import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {VideoPlayerDocsV2Component} from './video-player-docs-v2.component';
import {Router, RouterModule} from '@angular/router';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {ReactiveFormsModule} from '@angular/forms';
import {ButtonModule, TooltipModule, VideoPlayerModule} from '@ironsrc/fusion-ui';

class RouterStub {
    url = '';
    navigate(commands: any[], extras?: any) {}
}

// todo: This test failed on jenkins with error 'ResizeObserver loop limit exceeded thrown' on local passed.

/*describe('VideoPlayerDocsV2Component', () => {
    let component: VideoPlayerDocsV2Component;
    let fixture: ComponentFixture<VideoPlayerDocsV2Component>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [VideoPlayerDocsV2Component],
            imports: [ExampleBlockModule, CodeBlockModule, DocsMenuModule, RouterModule, VideoPlayerModule],
            providers: [{provide: Router, useClass: RouterStub}]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(VideoPlayerDocsV2Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});*/
