import {Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, Renderer2, ViewChild} from '@angular/core';
import {fromEvent, merge, Subject} from 'rxjs';
import {ChipFilterComponentConfigurations, ChipType, ChipTypeToClass} from './chip-filter-component-configurations';
import {takeUntil} from 'rxjs/operators';

@Directive()
export abstract class ChipFilterBaseComponent implements OnInit, OnDestroy {
    id: number | string;
    onDestroy$ = new Subject<void>();
    restListeners$ = new Subject<void>();
    clearClickSubscription$ = merge(this.onDestroy$, this.restListeners$);
    width: number;

    private _selected: boolean;
    private _disabled: boolean;
    private _close: boolean;

    @Input() set configuration(value: ChipFilterComponentConfigurations) {
        if (!!value) {
            this.id = value.id;
            this.close = value.close;
            this.disabled = value.disabled;
            this.selected = value.selected;
            this.type = value.type;
        }
    }
    @Input() suppressClickOnRemove = false;
    @Output() onRemove = new EventEmitter();
    @Output() onSelectedChange = new EventEmitter<any>();

    set close(close: boolean) {
        this._close = close;
        this.changeHostClass('closed-icon', close);
    }

    get close(): boolean {
        return this._close;
    }

    set disabled(disabled: boolean) {
        this._disabled = disabled;
        this.changeHostClass('fu-disabled', disabled);
    }

    get disabled(): boolean {
        return this._disabled;
    }

    set type(chipType: ChipType) {
        this.changeHostClass(ChipTypeToClass[chipType], !!chipType);
    }

    set selected(selected: boolean) {
        this.changeHostClass('fu-selected', selected);
        this._selected = selected;
    }

    get selected(): boolean {
        return this._selected;
    }

    constructor(private element: ElementRef, private renderer: Renderer2) {}

    ngOnInit() {
        this.width = this.element.nativeElement.offsetWidth;
        if (!this.close && !this.disabled) {
            this.setClickListener();
        }
    }

    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
        this.restListeners$.complete();
    }

    closeClicked($event) {
        this.renderer.removeChild(this.renderer.parentNode(this.element.nativeElement), this.element.nativeElement);
        this.onRemove.emit();
        if (this.suppressClickOnRemove) {
            $event.stopPropagation();
        }
    }

    setClickListener(): void {
        this.restListeners$.next();
        fromEvent(this.element.nativeElement, 'click')
            .pipe(takeUntil(this.clearClickSubscription$))
            .subscribe(_ => {
                this.selected = !this.selected;
                this.onSelectedChange.emit({
                    id: this.id,
                    selected: this.selected
                });
            });
    }

    changeHostClass(className: string, add: boolean): void {
        const classAction = add ? 'addClass' : 'removeClass';
        this.renderer[classAction](this.element.nativeElement, className);
    }
}
