import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlagBaseComponent} from './flag-base.component';

@Component({
    selector: 'fusion-flag',
    standalone: true, // todo: just for storybook to work, will be fixed in storybook 8.5.0
    imports: [CommonModule],
    template: `
        <svg class="fu-flag" focusable="false" aria-hidden="true" viewBox="0 0 24 24" [style.border-radius]="borderRadius">
            <image [attr.href]="flagUrl"></image>
        </svg>
    `,
    styleUrls: ['./flag.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlagComponent extends FlagBaseComponent {}
