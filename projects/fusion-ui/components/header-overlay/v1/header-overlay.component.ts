import {ChangeDetectionStrategy, Component, forwardRef} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {HeaderOverlayBaseComponent} from '@ironsource/fusion-ui/components/header-overlay/common/base';

@Component({
    selector: 'fusion-header-overlay',
    templateUrl: '../common/base/header-overlay.base.component.html',
    styleUrls: ['./header-overlay.component.scss'],
    host: {'ui-version': '1'},
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => HeaderOverlayComponent),
            multi: true
        }
    ]
})
export class HeaderOverlayComponent extends HeaderOverlayBaseComponent {}
