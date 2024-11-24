import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {TagBaseComponent} from '@ironsource/fusion-ui/components/tag/common/base';

@Component({
    selector: 'fusion-tag',
    templateUrl: '../common/base/tag.base.component.html',
    styleUrls: ['./tag.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class TagComponent extends TagBaseComponent implements OnInit {
    ngOnInit() {
        super.ngOnInit();
        this.closeIconName$.next({iconName: 'clear-full-circle', iconVersion: 'v1'});
    }
}
