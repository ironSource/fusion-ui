import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {VideoPlayerComponent} from './video-player.component';
import {Observable, of} from 'rxjs';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {LogService} from '@ironsource/fusion-ui/services/log';
import {ApiService} from '@ironsource/fusion-ui/services/api';
import {SecondsToMinutesModule} from '@ironsource/fusion-ui/pipes/numbers';

class MockApiService {
    get(url): Observable<any> {
        return of('');
    }
}

describe('VideoPlayerComponent', () => {
    let component: VideoPlayerComponent;
    let fixture: ComponentFixture<VideoPlayerComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [VideoPlayerComponent],
                imports: [IconModule, SecondsToMinutesModule],
                providers: [{provide: ApiService, useClass: MockApiService}, LogService]
            }).compileComponents();
        })
    );

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
