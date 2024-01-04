import {ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {TabConfiguration} from './tab.entities';
import {PopupComponentContent} from '@ironsource/fusion-ui/components/popup/common/entities';
import {IconData} from '@ironsource/fusion-ui/components/icon/v1';

@Component({
    selector: 'fusion-tab',
    templateUrl: './tab.component.html',
    styleUrls: ['./tab.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabComponent {
    @Input() set configuration(value: TabConfiguration) {
        this.text = value?.text;
        this.iconName = value?.icon;
        this.disabled = value?.disabled;
        this.infoIconName = value?.infoIcon;
        this.setTooltipToOwnerElement(value.tooltipContent);

        if (this.infoIconName && !this.tooltipInfoIconContent && value.popupContent) {
            // if has "info" icon, this icon will not used for tooltip and has popupContent
            this.popupContent = value.popupContent;
        }
    }
    @Output() showPopup: EventEmitter<{content: PopupComponentContent; target: ElementRef}> = new EventEmitter();

    @ViewChild('tabElement') tabElement: ElementRef;

    text: string;
    iconName: IconData;
    disabled: boolean;
    tooltipInfoIconContent: string;
    tooltipIconContent: string;
    tooltipContent: string;
    infoIconName: IconData;
    popupContent: PopupComponentContent;

    onAdditionalIconClicked() {
        if (this.popupContent) {
            this.showPopup.emit({content: this.popupContent, target: this.tabElement});
        }
    }

    private setTooltipToOwnerElement(tooltipContent: string) {
        if (tooltipContent) {
            if (this.infoIconName) {
                this.tooltipInfoIconContent = tooltipContent;
            } else if (this.iconName) {
                this.tooltipIconContent = tooltipContent;
            } else {
                this.tooltipContent = tooltipContent;
            }
        }
    }
}
