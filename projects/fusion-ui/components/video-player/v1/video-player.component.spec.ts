import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {VideoPlayerComponent} from './video-player.component';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {LogService} from '@ironsource/fusion-ui/services/log';
import {SecondsToMinutesPipe} from '@ironsource/fusion-ui/pipes/numbers';

describe('VideoPlayerComponent', () => {
    let component: VideoPlayerComponent;
    let fixture: ComponentFixture<VideoPlayerComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [VideoPlayerComponent],
            imports: [IconModule, SecondsToMinutesPipe],
            providers: [ LogService]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(VideoPlayerComponent);
        component = fixture.componentInstance;
        component.options = {noVideo: {icon: 'stam', title: ''}};
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
