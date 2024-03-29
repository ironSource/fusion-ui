import {AfterViewInit, Directive, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild} from '@angular/core';
import {ToastEntity, ToastLocation, ToastType} from '@ironsource/fusion-ui/components/toast/common/entities';
import {DynamicComponentConfiguration} from '@ironsource/fusion-ui/components/dynamic-components/common/entities';
import {LogService} from '@ironsource/fusion-ui/services/log';
import {fromEvent} from 'rxjs';
import {take} from 'rxjs/operators';
import {IconData} from '@ironsource/fusion-ui/components/icon/v1';

@Directive()
export abstract class ToastBaseComponent implements OnInit, AfterViewInit {
    @Input() set configuration(value: ToastEntity) {
        this.text = value.text || '';
        this.type = value.type || null;
        this.iconName = !this.type && value.icon ? value.icon : this.setIconByType(this.type);
        this.image = !this.type && value.image ? `url(${value.image})` : null;
        this.hasIconHolder = !this.type && !this.image && !this.iconName;
        this.hasIcon = !!this.type || !!this.iconName;
        this.duration = !!value.duration ? value.duration * 1000 : null;
        this.location = value.location;
        this.locationClass = !this.shownByService ? this.location : '';
        this.custom = this.getCustomConfiguration(value);
    }

    @Output() toastClosed = new EventEmitter();

    /** @internal */
    type: ToastType;
    /** @internal */
    text: string;
    /** @internal */
    iconName: IconData;
    /** @internal */
    icon: string;
    /** @internal */
    image: string;
    /** @internal */
    duration: number;
    /** @internal */
    location: ToastLocation;
    /** @internal */
    locationClass: string;
    /** @internal */
    custom: DynamicComponentConfiguration;
    /** @internal */
    shownByService = false; // util set from service
    /** @internal */
    hasIconHolder = true;
    /** @internal */
    hasIcon = true;
    /** @internal */
    @ViewChild('toast') toastView;

    constructor(private logService: LogService, private renderer: Renderer2) {}

    /** @internal */
    onCloseClicked() {
        this.closeToast();
    }

    ngOnInit() {
        if (this.duration) {
            setTimeout(this.closeToast.bind(this), this.duration);
        }
    }

    ngAfterViewInit() {
        this.renderer.addClass(this.toastView.nativeElement, this.getShownTransition());
    }

    private closeToast() {
        this.setCloseTransition();
        fromEvent(this.toastView.nativeElement, 'animationend')
            .pipe(take(1))
            .subscribe(data => {
                this.toastClosed.emit();
            });
    }

    private setIconByType(type: ToastType): IconData {
        let iconName;
        switch (type) {
            case 'success':
                iconName = {iconName: 'check', iconVersion: 'v2'};
                break;
            case 'alert':
                iconName = {iconName: 'bullhorn', iconVersion: 'v2'};
                break;
            case 'error':
            case 'warning':
                iconName = {iconName: 'warning-note', iconVersion: 'v2'};
                break;
        }
        return iconName || '';
    }

    private getCustomConfiguration(toastConfig: ToastEntity): DynamicComponentConfiguration {
        const isCustom = toastConfig?.custom?.component || toastConfig?.custom?.element || toastConfig?.custom?.htmlSnippet;
        if (isCustom) {
            if (!!toastConfig.text || !!toastConfig.type || !!toastConfig.icon || !!toastConfig.image) {
                this.logService.error(
                    new Error(`Can't use predefined and custom toast content same time. Custom content will be ignored.`)
                );
            }
            return toastConfig.custom;
        }
        return null;
    }

    private setCloseTransition() {
        let onCloseClass = 'fu-fadeout'; // default and center;
        if (this.location) {
            if (this.location.endsWith('-right')) {
                onCloseClass = 'fu-slide-out-right';
            } else if (this.location.endsWith('-left')) {
                onCloseClass = 'fu-slide-out-left';
            }
        }
        if (onCloseClass !== 'fu-fadeout' && this.shownByService) {
            // in case toast opened from service and has slide animation
            this.renderer.setStyle(this.toastView.nativeElement, 'position', 'relative');
        }
        // set on close class with animation
        this.renderer.addClass(this.toastView.nativeElement, onCloseClass);
    }

    private getShownTransition(): string {
        return this.getShownTransitionByLocation(this.location);
    }

    private getShownTransitionByLocation(location?: ToastLocation): string {
        if (!!location && location.startsWith('top-')) {
            return 'fu-top-fadein';
        } else if (!!location && location.startsWith('bottom-')) {
            return 'fu-bottom-fadein';
        } else {
            return 'fu-fadein';
        }
    }
}
