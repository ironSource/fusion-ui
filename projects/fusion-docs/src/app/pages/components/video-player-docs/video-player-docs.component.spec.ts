import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {VideoPlayerDocsComponent} from './video-player-docs.component';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';
import {Router, RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {ButtonModule, TooltipModule, VideoPlayerModule} from '@ironsrc/fusion-ui';

class RouterStub {
    url = '';
    navigate(commands: any[], extras?: any) {}
}

describe('VideoPlayerDocsComponent', () => {
    let component: VideoPlayerDocsComponent;
    let fixture: ComponentFixture<VideoPlayerDocsComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [VideoPlayerDocsComponent],
                imports: [
                    ExampleBlockModule,
                    CodeBlockModule,
                    DocsMenuModule,
                    RouterModule,
                    ReactiveFormsModule,
                    TooltipModule,
                    ButtonModule,
                    VideoPlayerModule
                ],
                providers: [{provide: Router, useClass: RouterStub}]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(VideoPlayerDocsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
