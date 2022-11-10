import {
    Input,
    OnInit,
    ElementRef,
    Renderer2,
    Injector,
    Output,
    EventEmitter,
    HostListener,
    Directive,
    SimpleChanges,
    OnDestroy
} from '@angular/core';
import {IconData} from '@ironsource/fusion-ui/components/icon/v1';
import {BehaviorSubject, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Directive()
export abstract class ButtonBaseComponent implements OnInit, OnDestroy {
    /** @internal */
    @HostListener('click', ['$event']) onClick($event: any) {
        this.onclick.emit($event);
    }

    /**
     * Add button icon (IconData = string | Icon)
     * @param value
     */
    @Input() set icon(value: IconData) {
        this.iconData = value;
        this.iconName = typeof this.iconData === 'string' ? this.iconData : this.iconData.iconName;
        this.setIconState(!!this.iconName);
    }

    /**
     * Set disable state
     * @param value
     */
    @Input() set disabled(value: boolean) {
        this.isDisabled = value;
        this.setDisableState(value);
    }

    /**
     * Set loading state
     * @param value
     */
    @Input() set loading(value: boolean) {
        this.isLoading$.next(value);
    }

    get loading() {
        return this.isLoading$.getValue();
    }

    /**
     * Set button as link
     * @param value
     */
    @Input() set link(value: boolean) {
        this.isLink = value;
        this.setLinkButtonState(this.isLink);
    }

    @Output() onclick = new EventEmitter();

    /** @internal */
    projectContent: boolean;
    /** @internal */
    isLink: boolean;
    /** @internal */
    iconName: string;
    /** @internal */
    iconData: IconData;
    private isLoading$ = new BehaviorSubject<boolean>(false);
    private isDisabled: boolean;
    private onDestroy$ = new Subject<void>();

    constructor(injector: Injector, private element: ElementRef, private renderer: Renderer2) {}

    ngOnInit() {
        this.projectContent = !!this.element.nativeElement.innerText;
        this.setHostClass(this.projectContent, 'fu-with-content');
        this.isLoading$.asObservable().pipe(takeUntil(this.onDestroy$)).subscribe(this.setLoadingState.bind(this));
    }

    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    private setHostClass(add: boolean, className: string) {
        const method = add ? 'addClass' : 'removeClass';
        this.renderer[method](this.element.nativeElement, className);
    }

    private setHostAttribute(add: boolean, attributeName: string, attributeValue: string) {
        const method = add ? 'setAttribute' : 'removeAttribute';
        this.renderer[method](this.element.nativeElement, attributeName, add ? attributeValue : null);
    }

    private setDisableState(disabling: boolean) {
        this.setHostClass(disabling, 'disabled');
        this.setHostAttribute(disabling, 'disabled', 'true');
    }

    private setLoadingState(loading: boolean) {
        this.setHostClass(loading, 'fu-with-loading');
        if (!this.isDisabled) {
            this.setDisableState(loading);
        }
    }

    private setIconState(hasIcon: boolean) {
        this.setHostClass(hasIcon, 'fu-iconed');
    }

    private setLinkButtonState(isLinkButton: boolean) {
        this.setHostClass(isLinkButton, 'fu-link-button');
    }
}
