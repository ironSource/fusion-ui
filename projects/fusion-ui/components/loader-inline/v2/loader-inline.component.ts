import {ChangeDetectionStrategy, Component} from '@angular/core';
import {LoaderInlineBaseComponent} from '@ironsource/fusion-ui/components/loader-inline/common/base';

@Component({
    selector: 'fusion-loader-inline',
    templateUrl: '../common/base/loader-inline.base.component.html',
    styleUrls: ['./loader-inline.component.scss'],
    host: {'ui-version': '2'},
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoaderInlineComponent extends LoaderInlineBaseComponent {}
