import {
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    EventEmitter,
    Input,
    OnDestroy,
    OnInit,
    Output,
    TemplateRef,
    ViewChild,
    ChangeDetectorRef,
    AfterViewInit
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';
import {IconData} from '@ironsource/fusion-ui/components/icon/common/entities';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {ApiBase} from '@ironsource/fusion-ui/components/api-base';
import {Subject} from 'rxjs';
import {takeUntil, tap} from 'rxjs/operators';
import {DropdownOption} from '@ironsource/fusion-ui/components/dropdown-option';
import {isNullOrUndefined, isObject, isString} from '@ironsource/fusion-ui/utils';
import {DEFAULT_IMAGE_HOLDER, TRIGGER_ICON} from './top-filter-trigger.config';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip';

@Component({
    selector: 'fusion-top-filter-trigger',
    standalone: true,
    imports: [CommonModule, IconModule, TooltipModule],
    templateUrl: './top-filter-trigger.component.html',
    styleUrls: ['./top-filter-trigger.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopFilterTriggerComponent implements OnInit, OnDestroy, AfterViewInit {
    /** @internal */
    @ContentChild(ApiBase, {static: true}) apiBase: ApiBase;
    /** @internal */
    @ViewChild('ref', {static: true}) ref: TemplateRef<any>;

    @Input() placeholder = 'Select';

    @Input() set label(value: string) {
        this.selectedLabel = value;
    }

    @Input() required: boolean;
    @Input() helper: string;
    @Input() error: string;
    @Input() icon: IconData;
    @Input() imageApp: string;
    @Input() loading: boolean;

    @Output() selectedChange = new EventEmitter<any>();

    /** @internal */
    triggerIcon = TRIGGER_ICON;
    /** @internal */
    selectedLabel = '';

    private onDestroy$ = new Subject<void>();
    private imageHolderBack = DEFAULT_IMAGE_HOLDER;

    get appImage(): SafeStyle {
        return this.sanitizer.bypassSecurityTrustStyle(this.imageApp ? `url(${this.imageApp})` : this.imageHolderBack);
    }

    constructor(private sanitizer: DomSanitizer, private cdr: ChangeDetectorRef) {}

    ngOnInit() {
        if (this.apiBase) {
            this.apiBase.templateRef = this.ref;
            this.apiBase.selectedTypeObject = true;
        }
    }

    ngAfterViewInit() {
        this.setValueSelectedListener();
    }

    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    private setValueSelectedListener(): void {
        this.apiBase
            ?.valueSelected()
            .pipe(takeUntil(this.onDestroy$), tap(this.resetSelected.bind(this)))
            .subscribe(this.setSelected.bind(this));
    }

    private resetSelected() {
        this.selectedLabel = this.placeholder;
        this.imageApp = null;
        this.icon = null;
        this.helper = null;
    }

    private setSelected(selected: {
        value: any;
        isSelected: boolean;
        selectedCount?: number;
        partialSelect?: {firstSelected?: DropdownOption; totalAmount?: number};
    }) {
        if (!isNullOrUndefined(selected.value) && isObject(selected.value)) {
            const selectedItem = selected.value as DropdownOption;
            this.selectedLabel = selectedItem.displayText || selectedItem.title;
            this.imageApp = selectedItem.image;
            this.icon = selectedItem.icon;
            this.helper = selectedItem.subText?.text;
        } else {
            this.selectedLabel = selected.value;
            if (isString(selected.value) && !selected.value.toLowerCase().startsWith('all ')) {
                this.helper =
                    selected.partialSelect.firstSelected.title ??
                    selected.partialSelect.firstSelected.displayText + ' and ' + (selected.selectedCount - 1) + ' more';
            } else {
                this.helper =
                    !isNullOrUndefined(selected.selectedCount) && selected.selectedCount !== 0
                        ? `${selected.selectedCount} selected`
                        : null;
            }
        }
        this.cdr.detectChanges();
        this.selectedChange.emit(selected);
    }
}
