import {ChangeDetectionStrategy, Component, HostBinding, Inject, Input, Optional} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlagBaseComponent} from './flag-base.component';

@Component({
    selector: 'fusion-flag',
    standalone: true,
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
