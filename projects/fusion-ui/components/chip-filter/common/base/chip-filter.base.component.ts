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
import {ApiBase} from '@ironsource/fusion-ui/components/api-base';

@Directive()
export abstract class ChipFilterBaseComponent implements OnInit, AfterViewInit, OnDestroy {
    @ContentChild(ApiBase, {static: true}) apiBase: ApiBase;
    @ViewChild('ref', {static: true}) ref: TemplateRef<any>;

    id: number | string;
    chipCssType$ = new BehaviorSubject<ChipType>(null);
    isCloseIcon$ = new BehaviorSubject<boolean>(false);

    private onDestroy$ = new Subject<void>();
    private restListeners$ = new Subject<void>();
    private clearClickSubscription$ = merge(this.onDestroy$, this.restListeners$);
    private chipSelected: boolean = false;
    private chipType: ChipFilterType = 'static';
    private _disabled$ = new BehaviorSubject<boolean>(false);
    private chipSelectValue: {id: number | string; value?: any; isSelected?: boolean};

    @Input() set configuration(value: ChipFilterComponentConfigurations) {
        if (!!value) {
            this.id = value.id;
            this.disabled = value.disabled || false;
            this.type = value.type || 'static';
            this.close = value.close || false;
        }
    }

    @Input() set isSelected(value: boolean) {
        this.selected = value || false;
    }

    @Input() set isVisible(value: boolean) {
        if (!value) {
            this.renderer.setStyle(this.element.nativeElement, 'display', 'none');
        } else {
            this.renderer.setStyle(this.element.nativeElement, 'display', 'block');
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
        this.chipType = chipType;
        this.setChipType(this.selected);
    }

    get type() {
        return this.chipType;
    }

    set selected(selected: boolean) {
        this.chipSelected = selected;
        this.changeHostClass('fu-selected', selected);
        this.setChipType(selected);
    }

    get selected(): boolean {
        return this.chipSelected;
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

        if (this.type === 'dynamic') {
            this.renderer.setStyle(this.element.nativeElement, 'display', 'none');
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
        $event.stopPropagation();
        if (this.type === 'dynamic') {
            this.renderer.setStyle(this.element.nativeElement, 'display', 'none');
        }

        this.selected = false;
        this.setChipType(this.selected);
        this.onRemove.emit({
            id: this.id,
            isSelected: this.selected
        });
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
        if (this.chipCssType$.getValue()) {
            this.changeHostClass(ChipTypeToClass[this.chipCssType$.getValue()], false);
        }
        switch (this.type) {
            case 'dynamic':
                this.chipCssType$.next('RemoveAbleSelect');
                this.close = true;
                break;
            case 'static':
                this.setChipSelectType(hasValue);
                break;
            case 'add':
                this.chipCssType$.next('AddFilter');
                break;
        }

        this.changeHostClass(ChipTypeToClass[this.chipCssType$.getValue()], !!this.chipCssType$.getValue());
    }

    private setChipSelectType(hasValue: boolean) {
        if (this.close === true) {
            this.chipCssType$.next(hasValue ? 'RemoveAbleSelect' : 'ChipFilter');
        } else {
            this.chipCssType$.next(hasValue ? 'UnRemoveAbleSelect' : 'ChipFilter');
        }
    }

    private changeHostClass(className: string, add: boolean): void {
        const classAction = add ? 'addClass' : 'removeClass';
        this.renderer[classAction](this.element.nativeElement, className);
    }
}
