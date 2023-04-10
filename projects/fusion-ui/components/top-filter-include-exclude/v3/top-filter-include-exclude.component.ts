import {ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TopFilterTriggerComponent} from '@ironsource/fusion-ui/components/top-filter-trigger/v3';
import {DropdownDualMultiSelectModule} from '@ironsource/fusion-ui/components/dropdown-dual-multi-select';
import {FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule} from '@angular/forms';
import {DropdownOption} from '@ironsource/fusion-ui/components/dropdown-option';
import {IconData} from '@ironsource/fusion-ui/components/icon/common/entities';
import {ApiBase} from '@ironsource/fusion-ui/components/api-base';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
    selector: 'fusion-top-filter-include-exclude',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, TopFilterTriggerComponent, DropdownDualMultiSelectModule],
    templateUrl: './top-filter-include-exclude.component.html',
    styleUrls: ['./top-filter-include-exclude.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => TopFilterIncludeExcludeComponent),
            multi: true
        }
    ]
})
export class TopFilterIncludeExcludeComponent implements OnInit, OnDestroy {
    @Input() placeholder: string;
    @Input() helper: string;
    @Input() error: string;
    @Input() loading: boolean = false;
    @Input() required: boolean = false;
    @Input() title: string;
    @Input() items: DropdownOption[] = [];

    /** @internal */
    formControlIncludeExclude: FormControl = new FormControl();

    private onDestroy$ = new Subject<void>();

    constructor() {}

    ngOnInit(): void {
        this.formControlIncludeExclude.valueChanges.pipe(takeUntil(this.onDestroy$)).subscribe(value => {
            this.propagateChange(value);
        });
    }

    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    /** @internal */
    propagateChange = (_: DropdownOption[]) => {};
    /** @internal */
    propagateTouched = () => {};
    /** @internal */
    writeValue(value: DropdownOption[]): void {
        this.formControlIncludeExclude.setValue(value ?? [], {emitEvent: false});
    }
    /** @internal */
    registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }
    /** @internal */
    registerOnTouched(fn: any): void {
        this.propagateTouched = fn;
    }
}
