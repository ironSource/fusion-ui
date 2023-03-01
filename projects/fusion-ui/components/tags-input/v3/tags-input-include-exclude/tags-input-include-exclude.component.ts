import {ChangeDetectionStrategy, Component, forwardRef, Input, OnDestroy, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule} from '@angular/forms';
import {TagsInputComponent} from '@ironsource/fusion-ui/components/tags-input';
import {DropdownDualMultiSelectModule} from '@ironsource/fusion-ui/components/dropdown-dual-multi-select';
import {TagComponentConfigurations} from '@ironsource/fusion-ui/components/tag';
import {DropdownOption} from '@ironsource/fusion-ui/components/dropdown-option';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

/**
 * Combined component Tags-Input with Dropdown-Include-Exclude
 */
@Component({
    selector: 'fusion-tags-input-include-exclude',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, TagsInputComponent, DropdownDualMultiSelectModule],
    templateUrl: './tags-input-include-exclude.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => TagsInputIncludeExcludeComponent),
            multi: true
        }
    ]
})
export class TagsInputIncludeExcludeComponent implements OnInit, OnDestroy {
    @Input() set placeholder(value: string) {
        this.initPlaceholder = value;
        this.tagInputPlaceholder = this.initPlaceholder;
    }

    @Input() error: string;
    @Input() helper: string;

    @Input() title: string;
    @Input() items: DropdownOption[] = [];

    /** @internal */
    formControlIncludeExclude = new FormControl<DropdownOption[]>([]);
    /** @internal */
    tagInputPlaceholder: string;

    private tags: TagComponentConfigurations[] = [];
    private initPlaceholder: string;

    private onDestroy$ = new Subject<void>();

    constructor() {}

    ngOnInit(): void {
        this.formControlIncludeExclude.valueChanges.pipe(takeUntil(this.onDestroy$)).subscribe(this.setTags.bind(this));
    }

    ngOnDestroy(): void {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    // region Implement ControlValueAccessor methods
    /** @internal */
    propagateChange = (_: DropdownOption[]) => {};

    /** @internal */
    propagateTouched = () => {};

    /** @internal */
    writeValue(value: DropdownOption[]): void {
        if (!Array.isArray(value)) {
            value = [];
        }
        this.formControlIncludeExclude.setValue(value, {emitEvent: false});
        this.setTags(this.formControlIncludeExclude.value, false);
    }

    /** @internal */
    registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }

    /** @internal */
    registerOnTouched(fn: any): void {
        this.propagateTouched = fn;
    }

    // endregion

    private setTags(selected: DropdownOption[], propagateChange = true) {
        if (Array.isArray(selected) && selected.length) {
            if (selected.length === this.items.length) {
                this.tags = [];
                this.tagInputPlaceholder = 'All selected';
            } else {
                this.tagInputPlaceholder = '';
                this.tags = selected.map((option: DropdownOption) => ({
                    id: option.id,
                    title: option.title ?? option.displayText,
                    image: option.image,
                    icon: option.icon,
                    flag: option.flag
                }));
            }
        } else {
            this.tagInputPlaceholder = this.initPlaceholder;
            this.tags = [];
            selected = [];
        }
        if (propagateChange) {
            this.propagateChange(selected);
        }
    }
}
