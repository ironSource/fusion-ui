import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {tooltipConfiguration, TooltipPosition} from '../../tooltip/common/base';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {TooltipDirective} from '@ironsource/fusion-ui/components/tooltip/v4';
import {CopyToClipboardModule} from '@ironsource/fusion-ui/directives/copy-to-clipboard';
import {SnackbarService} from '@ironsource/fusion-ui/components/snackbar/v4';

@Component({
    selector: 'fusion-inline-copy',
    standalone: true,
    host: {class: 'fusion-v4'},
    imports: [IconModule, TooltipDirective, CopyToClipboardModule],
    providers: [SnackbarService],
    templateUrl: './inline-copy.component.html',
    styleUrl: './inline-copy.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InlineCopyComponent {
    @Input() text = '';
    @Input() size: 'small' | 'medium' = 'small';
    @Input() tooltipText = 'Copy to clipboard';
    @Input() tooltipConfiguration: tooltipConfiguration = {
        position: TooltipPosition.Bottom,
        suppressPositionArrow: true
    };
    @Input() iconName = 'ph/copy';
    @Input() iconPosition: 'left' | 'right' = 'right';
    @Input() testId = '';
    @Input() valueToCopy = '';
    @Input() suppressTooltip = false;
    @Input() suppressSnackbar = false;
    @Input() copiedSnackbarText = 'Copied successfully';

    snackbarService: SnackbarService = inject(SnackbarService);

    copyToClipboard() {
        return () => this.valueToCopy || this.text;
    }

    textCopied() {
        if (!this.suppressSnackbar) {
            this.snackbarService.show({
                title: this.copiedSnackbarText,
                type: 'success',
                location: 'top-right',
                duration: 1500
            });
        }
    }
}
