import {Component, ElementRef, Input, Renderer2} from '@angular/core';

@Component({
    selector: 'fusion-tab',
    template: '<div class="fu-tab-content"><ng-content></ng-content></div>',
    styleUrls: ['./tab.component.scss']
})
export class TabComponent {
    @Input() set selected(value: boolean) {
        this.toggleSelected(value);
    }
    @Input() set disabled(value: boolean) {
        this.toggleDisabled(value);
    }

    constructor(private _element: ElementRef, private _renderer: Renderer2) {}

    private toggleSelected(isSelected: boolean): void {
        const elementNative = this._element.nativeElement;
        if (isSelected) {
            this._renderer.setAttribute(elementNative, 'selected', '');
        } else {
            this._renderer.removeAttribute(elementNative, 'selected');
        }
    }

    private toggleDisabled(isDisabled: boolean): void {
        const elementNative = this._element.nativeElement;
        if (isDisabled) {
            this._renderer.setAttribute(elementNative, 'disabled', '');
        } else {
            this._renderer.removeAttribute(elementNative, 'disabled');
        }
    }
}
