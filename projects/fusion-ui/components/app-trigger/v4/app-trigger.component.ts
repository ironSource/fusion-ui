import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {Application} from '@ironsource/fusion-ui/entities';
import {SnackbarService} from '@ironsource/fusion-ui/components/snackbar/v4';
import {TooltipComponent} from '@ironsource/fusion-ui/components/tooltip/v4';
import {tooltipConfiguration, TooltipPosition} from '@ironsource/fusion-ui/components/tooltip/common/base';
import {TooltipDirective} from '@ironsource/fusion-ui/components/tooltip/v4';
import {CopyToClipboardModule} from '@ironsource/fusion-ui/directives/copy-to-clipboard';

@Component({
    selector: 'fusion-app-trigger',
    standalone: true,
    host: {class: 'fusion-v4'},
    imports: [IconModule, TooltipDirective, CopyToClipboardModule, TooltipComponent],
    providers: [SnackbarService],
    templateUrl: './app-trigger.component.html',
    styleUrl: './app-trigger.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppTriggerComponent {
    @Input() application?: Application;
    @Input() placeholder? = '';
    @Input() required? = false;

    /** @internal */
    tooltipConfiguration: tooltipConfiguration = {
        position: TooltipPosition.Bottom,
        suppressPositionArrow: true
    };
    /** @internal */
    snackbarService: SnackbarService = inject(SnackbarService);
    /** @internal */
    get appImageSrc(): string {
        return this.application?.imageSrc;
    }
    /** @internal */
    get platformIcon(): string {
        return `v4/branded/${this.application?.platform}`;
    }
    /** @internal */
    get placeholderText(): string {
        return this.placeholder;
    }
    /** @internal */
    copyToClipboard() {
        return () => this.application.key;
    }

    /** @internal */
    textCopied() {
        this.snackbarService.show({
            title: 'Copied successfully',
            type: 'success',
            location: 'top-right',
            duration: 1500
        });
    }
}
