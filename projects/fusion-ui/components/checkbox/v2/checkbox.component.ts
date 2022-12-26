import {ChangeDetectionStrategy, Component, forwardRef} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {CheckboxBaseComponent} from '@ironsource/fusion-ui/components/checkbox/common/base';
import {BASE_CHECKED_IMAGE} from './checkbox.cusom-svg';

@Component({
    selector: 'fusion-checkbox',
    templateUrl: './checkbox.component.html',
    styleUrls: ['./checkbox.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => CheckboxComponent),
            multi: true
        }
    ]
})
export class CheckboxComponent extends CheckboxBaseComponent {
    /** @internal */
    getBackgroundImage() {
        let svg;
        if (this.backgroundColor && (this.checked || this.isIndeterminate)) {
            const baseSvg = BASE_CHECKED_IMAGE.style_v2;
            svg = this.sanitizer.bypassSecurityTrustStyle(
                `url("data:image/svg+xml,${encodeURIComponent(
                    baseSvg[this.isIndeterminate ? 'indeterminate' : 'checked'].replace('{backgroundColor}', this.backgroundColor)
                )}") left top no-repeat`
            );
        }

        return svg;
    }
}
