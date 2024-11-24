import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnInit,
    Output,
    Renderer2,
    ViewChild
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {fromEvent} from 'rxjs';
import {take} from 'rxjs/operators';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {SnackActionButton, SnackbarIconByType, SnackbarLocation, SnackbarType} from './snackbar.entities';
import {ButtonComponent, IconButtonComponent} from '@ironsource/fusion-ui/components/button/v4';

@Component({
    selector: 'fusion-snackbar',
    imports: [CommonModule, IconModule, IconButtonComponent, ButtonComponent],
    templateUrl: './snackbar.component.html',
    styleUrls: ['./snackbar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SnackbarComponent implements OnInit, AfterViewInit {
    @Input() title: string;
    @Input() message: string;
    @Input() type: SnackbarType = 'default';
    @Input() duration: number = 3000;
    @Input() location: SnackbarLocation = 'top-right';
    @Input() actionButtons: SnackActionButton[];

    @Output() closed = new EventEmitter();

    /** @internal */
    shownByService = false; // util set from service

    /** @internal */
    @ViewChild('snackbar') snackbarView: ElementRef;

    /** @internal */
    get statusIcon(): string {
        return SnackbarIconByType[this.type];
    }

    constructor(private renderer: Renderer2) {}

    ngOnInit() {
        if (this.duration) {
            setTimeout(this.closeSnackbar.bind(this), this.duration);
        }
    }

    ngAfterViewInit() {
        this.renderer.addClass(this.snackbarView.nativeElement, this.getShownTransition());
    }

    /** @internal */
    onCloseClicked() {
        this.closeSnackbar();
    }

    actionButtonsClicked(button: SnackActionButton) {
        if (typeof button?.onClick === 'function') {
            button.onClick();
        }
    }

    private closeSnackbar() {
        this.setCloseTransition();
        fromEvent(this.snackbarView.nativeElement, 'animationend')
            .pipe(take(1))
            .subscribe(data => {
                this.closed.emit();
            });
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
            this.renderer.setStyle(this.snackbarView.nativeElement, 'position', 'relative');
        }
        // set on close class with animation
        this.renderer.addClass(this.snackbarView.nativeElement, onCloseClass);
    }

    private getShownTransition(): string {
        return this.getShownTransitionByLocation(this.location);
    }

    private getShownTransitionByLocation(location?: SnackbarLocation): string {
        if (!!location && location.startsWith('top-')) {
            return 'fu-top-fadein';
        } else if (!!location && location.startsWith('bottom-')) {
            return 'fu-bottom-fadein';
        } else {
            return 'fu-fadein';
        }
    }
}
