import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';
import {DynamicComponentConfiguration} from '@ironsource/fusion-ui/components/dynamic-components/common/entities';

@Component({
    // eslint-disable-next-line
    selector: '[fusionTableEmpty]',
    templateUrl: './table-empty.component.html',
    styleUrls: ['./table-empty.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableEmptyComponent {
    @Input() fusionTableEmpty: number;
    @Input() customContent: DynamicComponentConfiguration;
    @Input() header: string;
    @Input() subHeader: string;
    @Input() icon: string;
    @Input() imageBackgroundUrl: string;
    @Input() showNoDataImage = true;

    constructor(private sanitizer: DomSanitizer) {}

    get imageBackground(): SafeStyle {
        return this.imageBackgroundUrl ? this.sanitizer.bypassSecurityTrustStyle(`url(${this.imageBackgroundUrl})`) : null;
    }
}
