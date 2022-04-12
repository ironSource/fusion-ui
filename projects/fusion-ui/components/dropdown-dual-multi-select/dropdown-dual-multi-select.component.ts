import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    EventEmitter,
    forwardRef,
    Injector,
    Input,
    OnDestroy,
    OnInit,
    Output,
    Renderer2
} from '@angular/core';
import {InputSize} from '@ironsource/fusion-ui/components/input';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';
import {DynamicComponentConfiguration} from '@ironsource/fusion-ui/components/dynamic-components';
import {DropdownOption} from '@ironsource/fusion-ui/components/dropdown';
import {BehaviorSubject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {FusionBase} from '@ironsource/fusion-ui/components/fusion-base';

const CLASS_LIST = [
    'dual-select-button',
    'fu-dual-multi-select-placeholder',
    'dropdown-dual-multi-select-button',
    'clear-all-btn',
    'fu-custom-placeholder',
    'fu-dual-multi-select-placeholder'
];

@Component({
    selector: 'fusion-dropdown-dual-multi-select',
    templateUrl: './dropdown-dual-multi-select.component.html',
    styleUrls: ['./dropdown-dual-multi-select.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DropdownDualMultiSelectComponent),
            multi: true
        }
    ]
})
export class DropdownDualMultiSelectComponent extends FusionBase implements OnInit, ControlValueAccessor, OnDestroy {
    @Input() isDisabled: boolean = false;
    @Input() dynamicPlaceholder: DynamicComponentConfiguration;
    @Input() totalItems: number;
    @Input() suppressClickButton: boolean = false;
    @Input() title: string;
    @Input() pendingItems: boolean = false;

    @Input() set placeholder(data: string) {
        this.placeholder$.next(data);
        this.defaultPlaceHolder = data;
    }
    @Input() set opened(data: boolean) {
        this.opened$.next(data);
    }
    @Input() set items(data: DropdownOption[]) {
        this.items$.next(data);
    }

    @Output() scrollDown = new EventEmitter();
    @Output() searchChange = new EventEmitter();
    @Output() viewChange = new EventEmitter();

    preSelectedItems = new FormControl();
    searchControlTerm = new FormControl('');
    items$ = new BehaviorSubject<DropdownOption[]>([]);
    opened$ = new BehaviorSubject<boolean>(false);
    placeholder$ = new BehaviorSubject<string>('');
    confirm: boolean = false;
    defaultPlaceHolder: string;
    isPositionLeft: boolean;
    inputSize = InputSize;
    dropdownDualMultiSelectionButtonOptions = {rounded: true, size: this.inputSize.Medium};

    private selectedChange: DropdownOption[];
    private parentWithOverflow: HTMLElement;

    constructor(protected element: ElementRef, protected renderer: Renderer2, injector: Injector) {
        super(injector);
    }

    ngOnInit(): void {
        this.initializeListeners();
    }

    onScrollDown(): void {
        this.scrollDown.emit();
    }

    applySelect(apply: boolean = false): void {
        this.opened$.next(!apply);
        this.confirm = true;
        this.setLabel();
        this.propagateChange(this.preSelectedItems.value);
        this.selectedChange = this.preSelectedItems.value;
        this.searchControlTerm.setValue('');
        this.viewChange.emit(this.opened$.getValue());
    }

    closeDropdownDualSelect(): void {
        this.opened$.next(false);
        this.confirm = false;
        this.writeValue(this.selectedChange);
        this.searchControlTerm.setValue('');
        this.viewChange.emit(this.opened$.getValue());
    }

    onClickDualMultiSelectButton(): void {
        if (!this.isDisabled && !this.suppressClickButton) {
            this.opened$.next(true);
            this.isPositionLeft = this.calcDualMultiSelectHolderPosition();
            this.viewChange.emit(this.opened$.getValue());
        }
    }

    propagateChange = (_: DropdownOption[]) => {};

    propagateTouched = () => {};

    writeValue(value: DropdownOption[]): void {
        this.preSelectedItems.setValue(value);
        this.selectedChange = value;
    }

    registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.propagateTouched = fn;
    }

    setDisabledState?(isDisabled: boolean): void {
        this.isDisabled = isDisabled;
    }

    // todo: need to check how to close element when more than one DropdownDualMultiSelect open component on screen
    onOutsideClick($event): void {
        const isClickComponentButton = CLASS_LIST.some(val => val === $event.classList.value);
        if (isClickComponentButton || $event.classList.value === '') {
            return;
        }
        if (!$event.closest('fusion-dropdown-dual-multi-select')) {
            this.closeDropdownDualSelect();
            this.viewChange.emit(this.opened$.getValue());
        }
    }

    protected calcDualMultiSelectHolderPosition(): boolean {
        const hostElement = this.element.nativeElement;
        if (this.parentWithOverflow === undefined || !document.contains(this.parentWithOverflow)) {
            this.parentWithOverflow = this.getParentWithOverflow(hostElement);
        }
        if (this.parentWithOverflow !== null) {
            const parentOverflowRect = this.parentWithOverflow.getBoundingClientRect();
            const hostHolderRect = hostElement.getBoundingClientRect();
            const hasSpaceOnLeft = hostHolderRect.right - parentOverflowRect.left >= 528;

            return hasSpaceOnLeft && parentOverflowRect.right - hostHolderRect.left < 528;
        }
        return false;
    }

    private getParentWithOverflow(childEl: HTMLElement): HTMLElement {
        const parent = childEl.parentElement;
        let retVal = null;
        if (parent) {
            const parentOverflow = window.getComputedStyle(parent).overflow;
            retVal = ['auto', 'hidden', 'scroll'].includes(parentOverflow) ? parent : this.getParentWithOverflow(parent);
        }
        return retVal;
    }

    private changeTerm(term: string): void {
        this.searchChange.emit(term);
    }

    private initializeListeners(): void {
        this.searchControlTerm.valueChanges.pipe(takeUntil(this.onDestroy$)).subscribe(this.changeTerm.bind(this));
        this.preSelectedItems.valueChanges.pipe(takeUntil(this.onDestroy$)).subscribe(this.checkSelectItemsChanged.bind(this));
    }

    private checkSelectItemsChanged(item: any): void {
        if (JSON.stringify(item) !== JSON.stringify(this.selectedChange) && this.confirm) {
            this.selectedChange = item;
        }
        this.setLabel();
    }

    private setLabel(): void {
        let placeholder = this.defaultPlaceHolder;
        if (this.preSelectedItems.value && this.preSelectedItems.value.length > 0 && this.items$.getValue().length > 0) {
            const placeholderPrefix =
                this.preSelectedItems.value.length === this.items$.getValue().length ? 'All' : `${this.preSelectedItems.value.length}`;
            placeholder = `${placeholderPrefix} selected`;
        }
        this.placeholder$.next(placeholder);
    }
}
