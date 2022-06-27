import {
    AfterContentInit,
    AfterViewInit,
    ChangeDetectorRef,
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
import {ChipFilterComponentConfigurations, ChipFilterMode, ChipType, ChipTypeToClass} from './chip-filter-component-configurations';
import {takeUntil} from 'rxjs/operators';
import {ApiBase} from '@ironsource/fusion-ui/components/api-base';

@Directive()
export abstract class ChipFilterBaseComponent implements OnInit, AfterViewInit, OnDestroy, AfterContentInit {
    @ContentChild(ApiBase, {static: true}) apiBase: ApiBase;
    @ViewChild('ref', {static: true}) ref: TemplateRef<any>;

    id: number | string;
    chipType$ = new BehaviorSubject<ChipType>(null);
    isCloseIcon$ = new BehaviorSubject<boolean>(false);
    defaultContent: TemplateRef<any>;
    isDefaultContent: boolean = true;

    private onDestroy$ = new Subject<void>();
    private restListeners$ = new Subject<void>();
    private clearClickSubscription$ = merge(this.onDestroy$, this.restListeners$);
    private isChipSelected: boolean = false;
    private chipMode: ChipFilterMode = 'static';
    private _disabled$ = new BehaviorSubject<boolean>(false);
    private chipSelectValue: {id: number | string; value?: any; isSelected?: boolean};
    private _maxWidth: number;

    @Input() set configuration(value: ChipFilterComponentConfigurations) {
        if (!!value) {
            this.id = value.id;
            this.disabled = value.disabled || false;
            this.mode = value.mode || 'static';
            this.close = value.close || false;
            this.maxWidth = value.maxWidth || 200;
        }
    }

    @Input() set isSelected(value: boolean) {
        this.selected = value || false;
        if (value) {
            this.chipSelectValue = {
                id: this.id,
                isSelected: this.selected
            };
        }
    }

    @Input() set isVisible(value: boolean) {
        if (!value) {
            this.renderer.setStyle(this.element.nativeElement, 'display', 'none');
        } else {
            this.renderer.setStyle(this.element.nativeElement, 'display', 'block');
        }
    }

    @Input() set isDynamicContent(value: boolean) {
        this.isDefaultContent = !value;
    }

    @Output() onRemove = new EventEmitter();

    @Output() onSelectedChange = new EventEmitter<any>();

    set maxWidth(width: number) {
        this._maxWidth = width;
    }

    get maxWidth() {
        return this._maxWidth;
    }

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

    set mode(chipMode: ChipFilterMode) {
        this.chipMode = chipMode;
        this.setChipType(this.selected);
    }

    get mode() {
        return this.chipMode;
    }

    set selected(selected: boolean) {
        this.isChipSelected = selected;
        this.changeHostClass('fu-selected', selected);
        this.setChipType(selected);
    }

    get selected(): boolean {
        return this.isChipSelected;
    }

    constructor(public element: ElementRef, private renderer: Renderer2, private cdr: ChangeDetectorRef) {}

    ngOnInit() {
        if (!this.apiBase && !this.disabled) {
            this.setClickListener();
        }

        if (this.apiBase) {
            this.apiBase.changeConfig(`${this.maxWidth}px`);
            this.apiBase.templateRef = this.ref;
            this.apiBase.isComponentDisabled$.next(this.disabled);
        }

        if (this.mode === 'dynamic') {
            this.renderer.setStyle(this.element.nativeElement, 'display', 'none');
        }
    }

    ngAfterViewInit() {
        this.setValueSelectedListener();
    }

    ngAfterContentInit() {
        this.defaultContent = this.apiBase?.contentTemplate;
    }

    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
        this.restListeners$.complete();
    }

    closeClicked($event) {
        $event.stopPropagation();
        if (this.mode === 'dynamic') {
            this.renderer.setStyle(this.element.nativeElement, 'display', 'none');
        }

        this.selected = false;
        this.setChipType(this.selected);
        this.onRemove.emit({
            id: this.id,
            isSelected: this.selected
        });
        this.apiBase?.resetState$.next();
    }

    private setValueSelectedListener(): void {
        this.apiBase
            ?.valueSelected()
            .pipe(takeUntil(this.onDestroy$))
            .subscribe((selected: {value: any; isSelected: boolean}) => {
                if (selected?.isSelected) {
                    this.selected = selected.isSelected;
                    this.setChipType(this.selected);
                    this.chipSelectValue = {
                        id: this.id,
                        ...selected
                    };
                    this.onSelectedChange.emit(this.chipSelectValue);
                } else {
                    this.selected = selected?.isSelected;
                    this.setChipType(this.selected);
                    if (this.mode === 'dynamic') {
                        this.renderer.setStyle(this.element.nativeElement, 'display', 'none');
                    }
                    this.onRemove.emit({
                        id: this.id,
                        isSelected: this.selected
                    });
                }
            });
    }

    private setClickListener(): void {
        this.restListeners$.next();
        fromEvent(this.element.nativeElement, 'click')
            .pipe(takeUntil(this.clearClickSubscription$))
            .subscribe(_ => {
                this.selected = true;
                this.setChipType(this.selected);
                this.chipSelectValue = {
                    id: this.id,
                    isSelected: this.selected
                };
                this.onSelectedChange.emit(this.chipSelectValue);
            });
    }

    private setChipType(hasValue: boolean) {
        if (this.chipType$.getValue()) {
            this.changeHostClass(ChipTypeToClass[this.chipType$.getValue()], false);
        }
        switch (this.mode) {
            case 'dynamic':
                this.setChipSelectType(hasValue);
                break;
            case 'static':
                this.setChipSelectType(hasValue);
                break;
            case 'add':
                this.chipType$.next('AddFilter');
                break;
        }

        this.changeHostClass(ChipTypeToClass[this.chipType$.getValue()], !!this.chipType$.getValue());
    }

    private setChipSelectType(hasValue: boolean) {
        if (this.close === true) {
            this.chipType$.next(hasValue ? 'RemoveAbleSelect' : 'ChipFilter');
        } else {
            this.chipType$.next(hasValue ? 'UnRemoveAbleSelect' : 'ChipFilter');
        }
    }

    private changeHostClass(className: string, add: boolean): void {
        const classAction = add ? 'addClass' : 'removeClass';
        this.renderer[classAction](this.element.nativeElement, className);
    }
}
