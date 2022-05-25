import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MobilePreviewerBaseComponent} from '@ironsource/fusion-ui/components/mobile-previewer/common/base';
import {BehaviorSubject} from 'rxjs';

@Component({
    selector: 'fusion-mobile-previewer',
    templateUrl: '../common/base/mobile-previewer.base.component.html',
    styleUrls: ['./mobile-previewer.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MobilePreviewerComponent extends MobilePreviewerBaseComponent {
    iconPrefix$ = new BehaviorSubject<string>('');
    ngOnInit() {
        super.ngOnInit();
        this.iconPrefix$.next('v2');
    }
}
