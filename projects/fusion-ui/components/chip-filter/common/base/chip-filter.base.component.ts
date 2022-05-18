import {
    AfterViewInit,
    ContentChild,
    Directive,
    ElementRef,
    EventEmitter,
    Input,
    OnDestroy,
    OnInit,
    Output,
    Renderer2,
    TemplateRef,
    ViewChild
} from '@angular/core';
import {BehaviorSubject, fromEvent, merge, Subject} from 'rxjs';
import {ChipFilterComponentConfigurations, ChipType, ChipTypeToClass} from './chip-filter-component-configurations';
import {takeUntil} from 'rxjs/operators';
import {ApiBase} from '@ironsource/fusion-ui/components/api-base/api-base';

@Directive()
export abstract class ChipFilterBaseComponent implements OnInit, AfterViewInit, OnDestroy {
    @ContentChild(ApiBase, {static: true}) apiBase: ApiBase;
    @ViewChild('ref', {static: true}) ref: TemplateRef<any>;

    id: number | string;
    width: number;
    onDestroy$ = new Subject<void>();
    restListeners$ = new Subject<void>();
    type$ = new BehaviorSubject<ChipType>(null);
    clearClickSubscription$ = merge(this.onDestroy$, this.restListeners$);
    isCloseIcon$ = new BehaviorSubject<boolean>(false);

    private _selected: boolean;
    private _disabled: boolean;

    @Input() set configuration(value: ChipFilterComponentConfigurations) {
        if (!!value) {
            this.id = value.id;
            this.disabled = value.disabled;
            this.selected = value.selected;
        }
    }

    @Input() set chipFilterType(value: ChipType) {
        if (value) {
            this.chipTypeChanged(value);
        }
    }

    @Input() suppressClickEvent = false;

    @Output() onRemove = new EventEmitter();

    @Output() onSelectedChange = new EventEmitter<any>();

    set close(close: boolean) {
        this.isCloseIcon$.next(close);
        this.changeHostClass('closed-icon', close);
    }

    set disabled(disabled: boolean) {
        this._disabled = disabled;
        this.changeHostClass('fu-disabled', disabled);
    }

    get disabled(): boolean {
        return this._disabled;
    }

    set type(chipType: ChipType) {
        this.type$.next(chipType);
        this.changeHostClass(ChipTypeToClass[chipType], !!chipType);
    }

    set selected(selected: boolean) {
        this.changeHostClass('fu-selected', selected);
        this._selected = selected;
    }

    get selected(): boolean {
        return this._selected;
    }

    constructor(public element: ElementRef, private renderer: Renderer2) {}

    ngOnInit() {
        this.width = this.element.nativeElement.offsetWidth;
        if (!this.suppressClickEvent && !this.disabled) {
            this.setClickListener();
        }

        if (this.apiBase) {
            this.apiBase.templateRef = this.ref;
        }
    }

    ngAfterViewInit() {
        this.setValueSelectedListener();
    }

    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
        this.restListeners$.complete();
    }

    closeClicked($event) {
        if (this.suppressClickEvent) {
            $event.stopPropagation();
        } else {
            this.renderer.removeChild(this.renderer.parentNode(this.element.nativeElement), this.element.nativeElement);
        }
        this.onRemove.emit({
            id: this.id
        });
        this.selected = false;
    }

    private setValueSelectedListener() {
        this.apiBase
            ?.valueSelected()
            .pipe(takeUntil(this.onDestroy$))
            .subscribe((isSelected: boolean) => {
                if (isSelected) {
                    this.selected = isSelected;
                    this.onSelectedChange.emit({
                        id: this.id,
                        selected: this.selected
                    });
                }
            });
    }

    private setClickListener(): void {
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

    private changeHostClass(className: string, add: boolean): void {
        const classAction = add ? 'addClass' : 'removeClass';
        this.renderer[classAction](this.element.nativeElement, className);
    }

    private chipTypeChanged(chipType: ChipType) {
        this.changeHostClass(ChipTypeToClass[this.type$.getValue()], false);
        this.close = chipType === 'RemoveAbleSelect';
        this.type = chipType;
    }
}
