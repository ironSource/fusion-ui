import {Component, Input} from '@angular/core';
import {PopupContentExampleEntity} from './popup-content-example.entity';
import {PopupService} from '@ironsource/fusion-ui/components/popup/common/services';

@Component({
    selector: 'fusion-popup-content-example',
    templateUrl: './popup-content-example.component.html',
    styleUrls: ['./popup-content-example.component.scss'],
    standalone: false
})
export class PopupContentExampleComponent {
    @Input() set configuration(value: PopupContentExampleEntity) {
        this.title = value?.title;
        this.content = value?.content;
        this.moreInfoLabel = value?.moreInfo?.label ?? 'Learn more';
        this.moreInfoUrl = value?.moreInfo?.url;
    }

    title: string;
    content: string;
    moreInfoLabel: string;
    moreInfoUrl: string;

    constructor(private popupService: PopupService) {}

    onCloseIconClicked($event) {
        this.popupService.closePopUp();
    }
}
