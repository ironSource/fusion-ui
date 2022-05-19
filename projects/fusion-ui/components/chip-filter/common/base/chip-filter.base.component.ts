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
import {ChipFilterComponentConfigurations, ChipFilterType, ChipType, ChipTypeToClass} from './chip-filter-component-configurations';
import {takeUntil} from 'rxjs/operators';
import {ApiBase} from '@ironsource/fusion-ui/components/api-base/api-base';

@Directive()
export abstract class ChipFilterBaseComponent implements OnInit, AfterViewInit, OnDestroy {
    @ContentChild(ApiBase, {static: true}) apiBase: ApiBase;
    @ViewChild('ref', {static: true}) ref: TemplateRef<any>;

    id: number | string;
    onDestroy$ = new Subject<void>();
    restListeners$ = new Subject<void>();
    chipCssType$ = new BehaviorSubject<ChipType>(null);
    clearClickSubscription$ = merge(this.onDestroy$, this.restListeners$);
    isCloseIcon$ = new BehaviorSubject<boolean>(null);

    private _selected: boolean = false;
    private _disabled$ = new BehaviorSubject<boolean>(false);
    private _type: ChipFilterType = 'static';

    @Input() set configuration(value: ChipFilterComponentConfigurations) {
        if (!!value) {
            console.log(value);
            this.id = value.id;
            this.disabled = value.disabled || false;
            this.selected = value.selected || false;
            this.type = value.type || 'static';
            this.close = value.close || false;
        }
    }

    @Output() onRemove = new EventEmitter();

    @Output() onSelectedChange = new EventEmitter<any>();

    set close(close: boolean) {
        this.isCloseIcon$.next(close);
        this.changeHostClass('closed-icon', close);
    }
    get close() {
        return this.isCloseIcon$.getValue();
    }

    set disabled(disabled: boolean) {
        this._disabled$.next(disabled);
        this.changeHostClass('fu-disabled', disabled);
    }

    get disabled(): boolean {
        return this._disabled$.getValue();
    }

    set type(chipType: ChipFilterType) {
        this._type = chipType;
        this.setChipType(this.selected);
    }

    get type() {
        return this._type;
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
        if (!this.apiBase && !this.disabled) {
            this.setClickListener();
        }

        if (this.apiBase) {
            this.apiBase.templateRef = this.ref;
            this.apiBase.isComponentDisabled$.next(this.disabled);
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
        if (this.apiBase) {
            $event.stopPropagation();
        } else {
            this.renderer.removeChild(this.renderer.parentNode(this.element.nativeElement), this.element.nativeElement);
        }

        this.onRemove.emit({
            id: this.id
        });
        this.selected = false;
        this.setChipType(this.selected);
    }

    private setValueSelectedListener(): void {
        this.apiBase
            ?.valueSelected()
            .pipe(takeUntil(this.onDestroy$))
            .subscribe((selected: {value: any; isSelected: boolean}) => {
                if (selected.isSelected && !this.disabled) {
                    this.selected = selected.isSelected;
                    this.setChipType(this.selected);
                    this.onSelectedChange.emit({
                        id: this.id,
                        ...selected
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
                this.setChipType(this.selected);
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

    private setChipType(hasValue: boolean) {
        if (this.chipCssType$.getValue()) {
            this.changeHostClass(ChipTypeToClass[this.chipCssType$.getValue()], false);
        }
        switch (this.type) {
            case 'dynamic':
                this.chipCssType$.next(hasValue ? 'RemoveAbleSelect' : 'ChipFilter');
                this.close = true;
                break;
            case 'static':
                this.chipCssType$.next(hasValue ? 'UnRemoveAbleSelect' : 'ChipFilter');
                break;
            case 'add':
                this.chipCssType$.next('AddFilter');
                break;
        }

        this.changeHostClass(ChipTypeToClass[this.chipCssType$.getValue()], !!this.chipCssType$.getValue());
    }
}
