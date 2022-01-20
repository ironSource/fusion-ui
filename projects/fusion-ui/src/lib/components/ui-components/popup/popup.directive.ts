import {Directive, ElementRef, HostListener, Input} from '@angular/core';
import {PopupEntity, PopupLocation} from './popup.entity';
import {PopupService} from './popup.service';

@Directive({
    selector: '[fusionPopup]'
})
export class PopupDirective {
    @Input() fusionPopup: PopupEntity;
    constructor(private elementRef: ElementRef, private popupService: PopupService) {}

    @HostListener('click')
    onClick() {
        if (this.fusionPopup) {
            const popupData: PopupEntity = {
                component: this.fusionPopup.component,
                location: this.fusionPopup.location || PopupLocation.ElementRelated
            };

            Object.assign(
                popupData,
                popupData.location === PopupLocation.ElementRelated ? {hostElement: this.elementRef} : null,
                this.fusionPopup.size ? {size: this.fusionPopup.size} : null,
                this.fusionPopup.hostElementPositionOffset
                    ? {
                          hostElementPositionOffset: this.fusionPopup.hostElementPositionOffset
                      }
                    : null
            );
            this.popupService.showPopUp(popupData);
        }
    }
}
