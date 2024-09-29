import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {InlineCopyComponent} from '@ironsource/fusion-ui/components/inline-copy';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {IBTestIcon} from '@ironsource/fusion-ui/entities';
import {TooltipDirective} from '@ironsource/fusion-ui/components/tooltip/v4';

@Component({
    selector: 'fusion-app-header',
    standalone: true,
    imports: [InlineCopyComponent, IconModule, NgOptimizedImage, TooltipDirective],
    templateUrl: './app-header.component.html',
    styleUrl: './app-header.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppHeaderComponent {
    @Input() size: 'small' | 'medium' = 'medium';
    @Input() appName!: string;
    @Input() appImageSrc!: string;
    @Input() platform!: 'android' | 'ios';
    @Input() appKey!: string;
    @Input() abTest: IBTestIcon;

    get appImageSize(): number {
        return this.size === 'small' ? 32 : 48;
    }

    get platformIcon(): string {
        return this.platform === 'android' ? 'v4/branded/android' : 'v4/branded/ios';
    }

    get abTestIcon(): string {
        return !!this.abTest ? `v4/ab-test/${this.abTest}` : null;
    }

    get appKeyToCopy(): string {
        return this.size === 'small' ? null : this.appKey;
    }

    get valueToCopy(): string {
        return this.appKey;
    }
}
