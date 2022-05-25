import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {LoaderBaseComponent} from '@ironsource/fusion-ui/components/loader/common/base';

@Component({
    selector: 'fusion-loader',
    templateUrl: '../common/base/loader.base.component.html',
    styleUrls: ['./loader.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoaderComponent extends LoaderBaseComponent implements OnInit {
    ngOnInit() {
        this.loaderIconName =
            this.size === 'inline' ? {iconName: 'loading-rotate', iconVersion: 'v2'} : {iconName: 'loader-dots-v4', iconVersion: 'v2'};
    }
}
