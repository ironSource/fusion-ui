import {ChangeDetectionStrategy, Component, forwardRef} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {CheckboxBaseComponent} from '@ironsource/fusion-ui/components/checkbox/common/base';

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
    getColoredBackgroundImage() {
        const checked = `data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Crect width='16' height='16' rx='4' fill='{backgroundColor}' /%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='m7.104 11.863 5.75-5.398a.45.45 0 0 0 0-.664l-.707-.664a.523.523 0 0 0-.708 0L6.75 9.54 4.56 7.484a.523.523 0 0 0-.706 0l-.708.664a.45.45 0 0 0 0 .664l3.25 3.05a.523.523 0 0 0 .708 0Z' fill='%23fff'/%3E%3C/svg%3E`;
        const indeterminate = `data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Crect width='16' height='16' rx='4' fill='{backgroundColor}' /%3E%3Cpath fill='%23fff' d='M4 7h8v2H4z'/%3E%3C/svg%3E`;
        let svg;
        if (this.backgroundColor && (this.checked || this.isIndeterminate)) {
            svg = this.sanitizer.bypassSecurityTrustStyle(
                `url("${(this.isIndeterminate ? indeterminate : checked).replace(
                    '{backgroundColor}',
                    encodeURIComponent(this.backgroundColor)
                )}") left center no-repeat`
            );
        }
        return svg;
    }
}
