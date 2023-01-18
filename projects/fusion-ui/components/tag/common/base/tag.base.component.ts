import {Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, Renderer2} from '@angular/core';
import {BehaviorSubject, fromEvent, Subject} from 'rxjs';
import {TagComponentConfigurations} from '@ironsource/fusion-ui/components/tag/common/entities';
import {takeUntil} from 'rxjs/operators';
import {IconData} from '@ironsource/fusion-ui/components/icon/v1';

@Directive()
export abstract class TagBaseComponent implements OnInit, OnDestroy {
    /** @internal */
    closeIconName$ = new BehaviorSubject<IconData>('');
    /** @internal */
    width: number;
    /** @internal */
    tooltipWidth: number;
    /** @internal */
    _selected: boolean;
    /** @internal */
    _disabled: boolean;
    /** @internal */
    _close: boolean;
    /** @internal */
    protected onDestroy$ = new Subject<void>();
    @Input() set configuration(value: TagComponentConfigurations) {
        if (!!value) {
            this.id = value.id;
            this.icon = value.icon;
            this.flag = value.flag;
            this.image = value.image;
            this.title = value.title;
            this.close = value.close;
            this.disabled = value.disabled;
            this.role = value.role;
            this.selected = value.selected;
            this.tooltipContent = value.tooltipContent ?? value.title;
            this.tooltipWidth = value.tooltipWidth;
        }
    }

    // deprecated inputs
    /** @internal */
    @Input() id: number | string;
    /** @internal */
    @Input() icon: IconData;
    /** @internal */
    @Input() flag: string;
    /** @internal */
    @Input() image: string;
    /** @internal */
    @Input() title: string;
    /** @internal */
    @Input() tooltipContent: string;
    // when using tags inside an isClickOutside directive,
    // the click from the onremove will cause isClickOutside to trigger as an outside click
    // due to the tag being already removed from the DOM tree when the click reaches isClickOutside
    // in which case we want to set suppressClickOnRemove as true
    /** @internal */
    @Input() suppressClickOnRemove = false;
    /** @internal */
    @Input() set role(role: 'filter') {
        this.changeHostClass('tag-filter', role === 'filter');
    }
    /** @internal */
    @Input() set close(close: boolean) {
        this._close = close;
        this.changeHostClass('with-closed-icon', close);
    }

    get close(): boolean {
        return this._close;
    }
    /** @internal */
    @Input() set disabled(disabled: boolean) {
        this._disabled = disabled;
        this.changeHostClass('disabled', disabled);
    }

    get disabled(): boolean {
        return this._disabled;
    }
    /** @internal */
    @Input()
    set selected(selected: boolean) {
        this.changeHostClass('selected', selected);
        this._selected = selected;
    }

    get selected(): boolean {
        return this._selected;
    }

    // eslint-disable-next-line
    @Output() onRemove = new EventEmitter();
    // eslint-disable-next-line
    @Output() onSelectedChange = new EventEmitter<any>();

    constructor(private element: ElementRef, private renderer: Renderer2) {}

    ngOnInit() {
        this.width = this.element.nativeElement.offsetWidth;
        // this.selectedVersion$.subscribe(styleVersion => {
        //     this.closeIconName$.next(
        //         styleVersion === StyleVersion.V2 || styleVersion === StyleVersion.V3
        //             ? 'close'
        //             : {iconName: 'clear-full-circle', iconVersion: 'v1'}
        //     );
        // });

        if (!this.close && !this.disabled) {
            this.setClickListener();
        }
    }

    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }
    /** @internal */
    closeClicked($event) {
        this.renderer.removeChild(this.renderer.parentNode(this.element.nativeElement), this.element.nativeElement);
        this.onRemove.emit();
        if (this.suppressClickOnRemove) {
            $event.stopPropagation();
        }
    }
    /** @internal */
    setClickListener(): void {
        this.onDestroy$.next();
        fromEvent(this.element.nativeElement, 'click')
            .pipe(takeUntil(this.onDestroy$))
            .subscribe(_ => {
                this.selected = !this.selected;
                this.onSelectedChange.emit({
                    id: this.id,
                    selected: this.selected
                });
            });
    }
    /** @internal */
    changeHostClass(className: string, add: boolean): void {
        const classAction = add ? 'addClass' : 'removeClass';
        this.renderer[classAction](this.element.nativeElement, className);
    }
}
