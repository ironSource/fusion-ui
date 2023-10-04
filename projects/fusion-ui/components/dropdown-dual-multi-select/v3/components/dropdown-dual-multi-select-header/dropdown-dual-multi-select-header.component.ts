import {
    ChangeDetectionStrategy,
    Component,
    Input,
    forwardRef,
    OnDestroy,
    ViewChild,
    ElementRef,
    AfterViewInit,
    Injector
} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';
import {debounceTime, distinctUntilChanged, takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {IconData} from '@ironsource/fusion-ui/components/icon/common/entities';
import {IncludeExcludeTestIdModifiers} from '@ironsource/fusion-ui/entities';
import {TestIdsService} from '@ironsource/fusion-ui/services';

@Component({
    selector: 'fusion-dropdown-dual-multi-select-header',
    templateUrl: './dropdown-dual-multi-select-header.component.html',
    styleUrls: ['./dropdown-dual-multi-select-header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DropdownDualMultiSelectHeaderComponent),
            multi: true
        }
    ]
})
export class DropdownDualMultiSelectHeaderComponent implements OnDestroy, AfterViewInit, ControlValueAccessor {
    @ViewChild('input') input?: ElementRef;

    @Input() title: string;
    @Input() testId: string;

    testIdIncludeExcludeModifiers: typeof IncludeExcludeTestIdModifiers = IncludeExcludeTestIdModifiers;
    testIdsService: TestIdsService = this.injector.get(TestIdsService);

    searchIcon?: IconData = {iconName: 'search-bold', iconVersion: 'v3'};
    searchClearIcon?: IconData = {iconName: 'cancel', iconVersion: 'v3'};
    searchControl = new FormControl();

    private onDestroy$ = new Subject<void>();

    constructor(private injector: Injector) {}

    ngOnDestroy(): void {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    ngAfterViewInit() {
        this.setFocusToInput();
    }

    writeValue(value: string): void {
        this.searchControl.patchValue(value, {emitEvent: false});
    }

    registerOnChange(fn: any): void {
        this.searchControl.valueChanges.pipe(takeUntil(this.onDestroy$), debounceTime(150), distinctUntilChanged()).subscribe(fn);
    }

    registerOnTouched(): void {}

    clearSearch?() {
        this.searchControl.setValue('');
        this.input.nativeElement.focus();
    }

    setFocusToInput() {
        this.input.nativeElement.focus();
    }
}
