import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    EventEmitter,
    forwardRef,
    Input,
    OnInit,
    Output,
    Type,
    ViewChild
} from '@angular/core';
import {isNullOrUndefined, isUndefined} from '@ironsource/fusion-ui/utils';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {HeaderSizes} from './header-sizes.enum';
import {BehaviorSubject} from 'rxjs';
import {WindowService} from '@ironsource/fusion-ui/services';
import {HeaderOptions} from './header-options';

@Component({
    selector: 'fusion-header-overlay',
    templateUrl: './header-overlay.component.html',
    styleUrls: ['./header-overlay.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => HeaderOverlayComponent),
            multi: true
        }
    ]
})
export class HeaderOverlayComponent implements OnInit {
    @Input() headerComponent: Type<Component>;
    @Input() width = '100%';
    @Input() height = '';
    @Input() showFooter = true;
    @Input() size: HeaderSizes;
    @Input() element: Node;
    @Input() clickOutsideActivate = true;

    @Output() closed = new EventEmitter();
    @Output() saved = new EventEmitter();
    @Output() isOpened = new EventEmitter();
    isActive: boolean;
    error: string;
    side: string;
    componentData: any;
    headerComponentData$: BehaviorSubject<{
        isActive: boolean;
        isOpen: boolean;
        componentData: any;
    }>;
    headerSizes = HeaderSizes;

    set isOpen(value: boolean) {
        this.isOverlayOpen = value;
        this.isOpened.emit(this.isOverlayOpen);
    }

    get isOpen() {
        return this.isOverlayOpen;
    }

    private isOverlayOpen: boolean;

    @ViewChild('header') header: ElementRef;

    constructor(private windowRef: WindowService, private elemRef: ElementRef, private cd: ChangeDetectorRef) {}

    ngOnInit() {
        this.headerComponentData$ = new BehaviorSubject({
            isActive: this.isActive,
            isOpen: this.isOpen,
            componentData: this.componentData
        });
    }

    toggleOverlay() {
        const position = this.elemRef.nativeElement.getBoundingClientRect();
        this.side = 'right';
        if (this.windowRef.nativeWindow.screen.width - position.x < window.screen.width / 2) {
            this.side = 'left';
        }

        this.isOpen = !this.isOpen;
    }

    close() {
        if (this.isOpen) {
            this.isOpen = false;
            this.closed.emit();
        }
    }

    onOutsideClick() {
        this.close();
    }

    writeValue(value: HeaderOptions): void {
        if (!isNullOrUndefined(value)) {
            this.componentData = value;
            if (!isUndefined(value.isOpen)) {
                this.isOpen = value.isOpen;
            }

            if (!isUndefined(value.isActive)) {
                this.isActive = value.isActive;
            }

            if (!isUndefined(value.error)) {
                this.error = value.error;
            }

            this.headerComponentData$.next({
                isActive: this.isActive,
                isOpen: this.isOpen,
                componentData: this.componentData
            });
        }
    }

    registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }

    propagateChange = (_: HeaderOptions) => {};

    registerOnTouched(fn: any): void {}
}
