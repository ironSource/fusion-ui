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
    ViewChild
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';
import {IconData} from '@ironsource/fusion-ui/components/icon/common/entities';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {ApiBase} from '@ironsource/fusion-ui/components/api-base';
import {Subject} from 'rxjs';
import {takeUntil, tap} from 'rxjs/operators';
import {DropdownOption} from '@ironsource/fusion-ui/components/dropdown-option';
import {isNullOrUndefined, isObject} from '@ironsource/fusion-ui/utils';

@Component({
    selector: 'fusion-top-filter-trigger',
    standalone: true,
    imports: [CommonModule, IconModule],
    templateUrl: './top-filter-trigger.component.html',
    styleUrls: ['./top-filter-trigger.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopFilterTriggerComponent implements OnInit, OnDestroy {
    /** @internal */
    @ContentChild(ApiBase, {static: true}) apiBase: ApiBase;
    /** @internal */
    @ViewChild('ref', {static: true}) ref: TemplateRef<any>;

    @Input() placeholder = 'Select';
    @Input() required: boolean;
    @Input() helper: string;
    @Input() error: string;
    @Input() icon: IconData;
    @Input() imageApp: string;
    @Input() loading: boolean;

    @Output() onSelectedChange = new EventEmitter<any>();

    /** @internal */
    triggerIcon: IconData = {iconName: 'angle-down', iconVersion: 'v3'};
    /** @internal */
    selectedLabel = '';

    private onDestroy$ = new Subject<void>();
    private imageHolderBack = `url("data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath opacity='.4' fill-rule='evenodd' clip-rule='evenodd' d='M17.253 26.661V19.51c0-.655.537-1.192 1.192-1.192h7.152c.656 0 1.192.537 1.192 1.192v7.152c0 .656-.536 1.192-1.192 1.192h-7.152a1.196 1.196 0 0 1-1.192-1.192Zm-3.576 1.192H6.525a1.196 1.196 0 0 1-1.192-1.192V19.51c0-.655.537-1.192 1.192-1.192h7.152c.656 0 1.192.537 1.192 1.192v7.152c0 .656-.536 1.192-1.192 1.192ZM5.333 14.741V7.59c0-.655.537-1.192 1.192-1.192h7.152c.656 0 1.192.537 1.192 1.192v7.152c0 .656-.536 1.192-1.192 1.192H6.525a1.196 1.196 0 0 1-1.192-1.192Z' fill='%2353575B'/%3E%3Cpath d='m20.77 5.682-5.066 5.054a1.187 1.187 0 0 0 0 1.68l5.066 5.067a1.187 1.187 0 0 0 1.68 0l5.067-5.066a1.187 1.187 0 0 0 0-1.68l-5.054-5.055a1.201 1.201 0 0 0-1.693 0Z' fill='%2353575B'/%3E%3C/svg%3E")`;

    get appImage(): SafeStyle {
        return this.sanitizer.bypassSecurityTrustStyle(this.imageApp ? `url(${this.imageApp})` : this.imageHolderBack);
    }

    constructor(private sanitizer: DomSanitizer) {}

    ngOnInit() {
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
    }

    private setValueSelectedListener(): void {
        this.apiBase?.valueSelected().pipe(takeUntil(this.onDestroy$), tap(this.resetSelected)).subscribe(this.setSelected.bind(this));
    }

    private resetSelected() {
        this.selectedLabel = this.placeholder;
        this.imageApp = null;
        this.icon = null;
        this.helper = null;
    }

    private setSelected(selected: {value: any; isSelected: boolean; selectedCount?: number}) {
        if (!isNullOrUndefined(selected.value) && isObject(selected.value)) {
            const selectedItem = selected.value as DropdownOption;
            this.selectedLabel = selectedItem.displayText || selectedItem.title;
            this.imageApp = selectedItem.image;
            this.icon = selectedItem.icon;
            this.helper = selectedItem.subText?.text;
        } else {
            this.selectedLabel = selected.value;
            this.helper = selected.selectedCount !== 0 ? `${selected.selectedCount} selected` : null;
        }
        this.onSelectedChange.emit(selected);
    }
}
