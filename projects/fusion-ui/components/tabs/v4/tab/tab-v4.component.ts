import {AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GenericPipe} from '@ironsource/fusion-ui/pipes/generic';
import {tabTestId} from '@ironsource/fusion-ui/components/tabs/consts';

const ATTRIBUTE_SELECTED = 'tab-selected';
const ATTRIBUTE_DISABLED = 'tab-disabled';

@Component({
    selector: 'fusion-tab',
    standalone: true,
    imports: [CommonModule, GenericPipe],
    host: {class: 'fusion-v4'},
    template: '<div class="fu-tab-content" data-testid="wrapperTestId" [attr.data-testid]="testId"><ng-content></ng-content></div>',
    styleUrls: ['./tab-v4.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabV4Component implements AfterViewInit {
    @Input() set selected(value: boolean) {
        this.toggleSelected(value);
    }

    @Input() testId: string = tabTestId;

    @Input() set disabled(value: boolean) {
        this.toggleDisabled(value);
    }

    // need it for using @ContentChildren in tabs component
    get nativeElement(): HTMLElement {
        return this._element.nativeElement;
    }

    get selected(): boolean {
        return this.nativeElement.hasAttribute(ATTRIBUTE_SELECTED);
    }

    constructor(private _element: ElementRef, private _renderer: Renderer2) {}

    ngAfterViewInit() {
        const tabsElement = this._element.nativeElement.closest('fusion-tabs');
        if (tabsElement && (tabsElement.classList.contains('fu-size-xl') || tabsElement.classList.contains('fu-size-lg'))) {
            this.setIconAloneClass();
        }
    }

    private setIconAloneClass() {
        const element = this._element.nativeElement.querySelector('.fu-tab-content');
        if (element.querySelector('.fu-tab-icon') && !element.textContent.trim().length) {
            this._renderer.addClass(element, 'fu-icon-alone');
        }
    }

    private toggleSelected(isSelected: boolean): void {
        const elementNative = this._element.nativeElement;
        if (isSelected) {
            this._renderer.setAttribute(elementNative, ATTRIBUTE_SELECTED, '');
        } else {
            this._renderer.removeAttribute(elementNative, ATTRIBUTE_SELECTED);
        }
    }

    private toggleDisabled(isDisabled: boolean): void {
        const elementNative = this._element.nativeElement;
        if (isDisabled) {
            this._renderer.setAttribute(elementNative, ATTRIBUTE_DISABLED, '');
        } else {
            this._renderer.removeAttribute(elementNative, ATTRIBUTE_DISABLED);
        }
    }
}
