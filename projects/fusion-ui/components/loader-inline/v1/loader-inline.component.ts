import {ChangeDetectionStrategy, Component} from '@angular/core';
import {LoaderInlineBaseComponent} from '@ironsource/fusion-ui/components/loader-inline/common/base';

@Component({
    selector: 'fusion-loader-inline',
    templateUrl: '../common/base/loader-inline.base.component.html',
    styleUrls: ['./loader-inline.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class LoaderInlineComponent extends LoaderInlineBaseComponent {}
