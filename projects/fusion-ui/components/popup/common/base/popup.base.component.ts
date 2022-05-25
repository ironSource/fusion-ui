import {AfterViewInit, Directive, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild} from '@angular/core';
import {
    PopupEntity,
    PopupLocation,
    PopupPositionOffset,
    DEFAULT_POPUP_OFFSET
} from '@ironsource/fusion-ui/components/popup/common/entities';
import {PopupService} from '@ironsource/fusion-ui/components/popup/common/services';
import {isNullOrUndefined} from '@ironsource/fusion-ui/utils';

@Directive()
export abstract class PopupBaseComponent implements OnInit, AfterViewInit {
    @ViewChild('dynamicContent') dynamicContent: ElementRef;
    @ViewChild('popupContainer', {static: true}) popupContainer: ElementRef;
    @Input() set popupData(value: PopupEntity) {
        this._popupData = value;
        this.resetPopup();
    }
    @Output() clickedOutside = new EventEmitter<HTMLElement>();

    private isOnInit = true;
    private _popupData: PopupEntity;

    // eslint-disable-next-line @typescript-eslint/adjacent-overload-signatures
    get popupData(): PopupEntity {
        return this._popupData || {};
    }

    get isOpened(): boolean {
        return (
            this.dynamicContent ||
            (this.popupContainer &&
                (this.popupContainer.nativeElement.innerText ||
                    (this.popupContainer.nativeElement.style.width && this.popupContainer.nativeElement.style.height)))
        );
    }

    get isHostElement(): boolean {
        return this.popupData.location === PopupLocation.ElementRelated && !isNullOrUndefined(this.popupData.hostElement);
    }

    get isNativeElement(): boolean {
        return isNullOrUndefined(this.popupData.hostElement.nativeElement);
    }

    get elementHostOffset(): PopupPositionOffset {
        return this.popupData.hostElementPositionOffset ? this.popupData.hostElementPositionOffset : DEFAULT_POPUP_OFFSET;
    }

    onResize() {
        if (this.isOpened) {
            this._setPosition();
        }
    }

    constructor(private renderer: Renderer2, private popupService: PopupService) {}

    ngOnInit() {
        if (!isNullOrUndefined(this.popupData.hostElement) && isNullOrUndefined(this.popupData.location)) {
            this.popupData.location = PopupLocation.ElementRelated;
        }
        this.popupContainer.nativeElement.style.setProperty(
            '--background-color',
            !!this._popupData && !!this.popupData.backgroundColor ? this.popupData.backgroundColor : 'transparent'
        );
    }

    ngAfterViewInit() {
        this._setPosition();
    }

    _setPosition() {
        let topPosition;
        let leftPosition;
        if (this.isHostElement) {
            const hostEl: HTMLElement = !this.isNativeElement ? this.popupData.hostElement.nativeElement : this.popupData.hostElement;
            const popupEl: HTMLElement = this.popupContainer.nativeElement;
            const offsetPosition: PopupPositionOffset = this.elementHostOffset;
            const hostElClientRect = hostEl.getBoundingClientRect();
            const popupElClientRect = popupEl.getBoundingClientRect();

            topPosition = hostElClientRect.bottom + offsetPosition.top;
            leftPosition = hostElClientRect.left + (hostElClientRect.width - popupElClientRect.width) / 2 + offsetPosition.left;
        }
        if (this.popupData.newInstance) {
            topPosition = this.elementHostOffset.top;
            leftPosition = this.elementHostOffset.left;
        }
        if (!isNullOrUndefined(topPosition) && !isNullOrUndefined(leftPosition)) {
            this.renderer.setStyle(this.popupContainer.nativeElement, 'top', topPosition + 'px');
            this.renderer.setStyle(this.popupContainer.nativeElement, 'left', leftPosition + 'px');
        }
    }

    private resetPopup(): void {
        if (this.isHostElement) {
            this._setPosition();
        } else if (this.popupContainer && this.popupContainer.nativeElement) {
            this.renderer.removeStyle(this.popupContainer.nativeElement, 'top');
            this.renderer.removeStyle(this.popupContainer.nativeElement, 'left');
        }
    }

    /**
     * in first detect changes function been invoked so we set it to work only from second and above
     */
    onClickOutside(targetElement: HTMLElement): void {
        const isSuppressed =
            !isNullOrUndefined(this.popupData.suppressCloseElementSelector) &&
            (!!targetElement.getAttribute(this.popupData.suppressCloseElementSelector) ||
                !!targetElement.closest(this.popupData.suppressCloseElementSelector));

        if (!this.isOnInit && this.isOpened && !isSuppressed) {
            this.popupService.closePopUp();
            if (!this.popupData.component || this.popupData.newInstance) {
                this.clickedOutside.emit(targetElement);
            }
        }
        this.isOnInit = false;
    }
}
