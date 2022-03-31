import {AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild} from '@angular/core';
import {ToastEntity, ToastLocation, ToastType} from './toast.entity';
import {DynamicComponentConfiguration} from '@ironsource/fusion-ui/components/dynamic-components';
import {LogService} from '@ironsource/fusion-ui/services/log';
import {fromEvent} from 'rxjs';
import {take} from 'rxjs/operators';

@Component({
    selector: 'fusion-toast',
    templateUrl: './toast.component.html',
    styleUrls: ['./toast.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToastComponent implements OnInit, AfterViewInit {
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

    type: ToastType;
    text: string;
    iconName: string | {iconName: string; iconVersion: string};
    icon: string;
    image: string;
    duration: number;
    location: ToastLocation;
    locationClass: string;
    custom: DynamicComponentConfiguration;
    shownByService = false; // util set from service

    hasIconHolder = true;
    hasIcon = true;

    @ViewChild('toast') toastView;

    constructor(private logService: LogService, private renderer: Renderer2) {}

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

    private setIconByType(type: ToastType): string | {iconName: string; iconVersion: string} {
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
