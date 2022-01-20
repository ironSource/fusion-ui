import {ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, Input, OnInit, Optional, Inject, Injector} from '@angular/core';
import {isNullOrUndefined} from '../../../utils';
import {ListBoxOption} from './entities/list-box-option';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {ListBoxModes} from './entities/list-box-modes';
import {detectChangesDecorator} from '../../../decorators/detect-changes.decorator';
import {StyleBase} from '../../style/style-base';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {StyleVersion} from '../../../services/version/style-version.enum';

@Component({
    selector: 'fusion-list-box',
    templateUrl: './list-box.component.html',
    styleUrls: ['./list-box.component.scss', './list-box.component-v2.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => ListBoxComponent),
            multi: true
        }
    ]
})
export class ListBoxComponent extends StyleBase implements OnInit, ControlValueAccessor {
    options: ListBoxOption[];
    isDisabled: boolean;
    @Input() mappingOptions: any = {id: 'id', displayText: 'displayText'};
    @Input() id: number | string;
    @Input() mode: ListBoxModes;
    @Input() title: string;
    // for native;
    @Input() set disabled(value: boolean) {
        this.setDisabledState(value);
    }

    checkIconName$: Observable<string | {iconName: string; iconVersion: string}> = this.selectedVersion$.pipe(
        map(styleVersion => (styleVersion === StyleVersion.V2 ? 'check' : 'check-v-2')),
        startWith('check-v-2')
    );

    removeIconName$: Observable<string | {iconName: string; iconVersion: string}> = this.selectedVersion$.pipe(
        map(styleVersion => (styleVersion === StyleVersion.V2 ? 'close-circle' : {iconName: 'clear-full-circle', iconVersion: 'v1'})),
        startWith({iconName: 'clear-full-circle', iconVersion: 'v1'})
    );

    constructor(injector: Injector, public cdr: ChangeDetectorRef) {
        super(injector);
    }

    ngOnInit() {
        this.mappingOptions = {
            id: this.mappingOptions && this.mappingOptions.id ? this.mappingOptions.id : 'id',
            displayText: this.mappingOptions && this.mappingOptions.displayText ? this.mappingOptions.displayText : 'displayText'
        };

        this.mode = this.mode || ListBoxModes.Regular;
    }

    trackByOption(index, option) {
        return option ? option.id : index;
    }

    @detectChangesDecorator
    removeOption(item, $event) {
        this.options.splice(this.options.indexOf(item), 1);
        this.propagateChange(this.options);
        if ($event) {
            $event.stopPropagation();
        }
    }

    // Implement ControlValueAccessor methods
    writeValue(value: any): void {
        if (isNullOrUndefined(value) || (Array.isArray(value) && value.length === 0)) {
            this.options = [];
        } else {
            this.options = Array.isArray(value) ? value : [value];
        }

        // creating new instance does not trigger change, so alert manually value changed
        if (!(this.cdr as any).destroyed) {
            this.cdr.detectChanges();
        }
    }

    registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }

    registerOnTouched(): void {}

    propagateChange = (_: ListBoxOption[]) => {};

    setDisabledState(isDisabled: boolean) {
        this.isDisabled = isDisabled;

        // the above line does not trigger change, so alert manually value changed
        this.cdr.detectChanges();
    }
}
