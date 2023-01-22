import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    HostBinding,
    Inject,
    Input,
    OnChanges,
    OnInit,
    Optional,
    Output,
    SimpleChanges,
    Type,
    ViewChild
} from '@angular/core';
import {isBoolean, isNull, isNullOrUndefined} from '@ironsource/fusion-ui/utils';
import {BehaviorSubject} from 'rxjs';
import {TableService} from '@ironsource/fusion-ui/components/table/common/services';
import {FormControl} from '@angular/forms';
import {InputInlineComponent} from '@ironsource/fusion-ui/components/input-inline/v2';
import {AdvancedInputInline} from '@ironsource/fusion-ui/components/input-inline/common/base';
import {
    CELL_PADDING,
    DEFAULT_REMOVE_ICON_V3,
    DEFAULT_REMOVE_TOOLTIP_TEXT,
    DEFAULT_REMOVE_TOOLTIP_WIDTH,
    TABLE_OPTIONS_TOKEN,
    TableModuleOptions,
    CellPosition,
    TableColumn,
    TableOptions,
    TableRowHeight,
    TableMultipleActions
} from '@ironsource/fusion-ui/components/table/common/entities';
import {ERROR_MESSAGES} from '@ironsource/fusion-ui/components/error-message';
import {LogService} from '@ironsource/fusion-ui/services/log';
import {DynamicComponentConfiguration} from '@ironsource/fusion-ui/components/dynamic-components/common/entities';
import {IconData} from '@ironsource/fusion-ui/components/icon/common/entities';
import {MenuDropItem} from '@ironsource/fusion-ui/components/menu-drop';

type CellDataType = Type<Component> | FormControl | string | boolean | undefined | null;

@Component({
    // eslint-disable-next-line
    selector: '[fusionTableCell]',
    templateUrl: './table-cell.component.html',
    styleUrls: ['./table-cell.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableCellComponent implements OnInit, OnChanges {
    @Input() set data(value: CellDataType) {
        this._data = value;
    }

    @Input() column: TableColumn;
    @Input() row: {[key: string]: any};
    @Input() rowIndex: string | number;
    @Input() options: TableOptions = null;
    @Input() position: CellPosition;

    @Input() infoIconTooltip: string;
    @Input() isRemove: boolean;
    @Input() floatingActionsDisabled: boolean;
    @Input() isRowSelected: boolean;
    @Input() isLastColumn: boolean;
    @Input() customClass: {[columnKey: string]: string} = {};
    @Input() isReadOnly: boolean;

    @Output() selectedChange = new EventEmitter();
    @Output() dataChange = new EventEmitter();
    @Output() remove = new EventEmitter();

    @ViewChild('inlineInput') inlineInputEdit: InputInlineComponent;

    @HostBinding('class.cell-borders') cellBorders = true;
    @HostBinding('class.is-inline-removable') isInlineRemovable = false;

    @HostBinding('class.is-editable') get isCellEditable(): boolean {
        return this.tableService.isTypeInputEdit(this.column);
    }

    @HostBinding('class.sticky-left') get sticky(): boolean {
        return this.column.sticky;
    }

    @HostBinding('style.left') get stickyLeft(): string {
        return this.column.stickyLeftMargin;
    }

    isInRequest$: BehaviorSubject<boolean> = new BehaviorSubject(false);
    cellLRPadding = CELL_PADDING;
    innerElementWidth = '';
    isInEditMode = false;
    initInputData: string | boolean | undefined | null | AdvancedInputInline;
    inputError$ = new BehaviorSubject('');
    notAvailableText: string;
    isNull: (object: any) => boolean = isNull;
    isNullOrUndefined: (object: any) => boolean = isNullOrUndefined;
    customCellData: DynamicComponentConfiguration;

    shownActionsMenu = false;

    get actionsMenuButtonId(): string {
        return this.options.tableId + '_' + this.rowIndex;
    }

    // eslint-disable-next-line @typescript-eslint/adjacent-overload-signatures
    get data(): CellDataType {
        if (!isNull(this._data) && this.tableService.isTypeComponent(this.column) && typeof this._data === 'object') {
            // eslint-disable-next-line dot-notation, @typescript-eslint/dot-notation
            this._data['cellPosition'] = this.position;
        }
        return this._data;
    }

    get cellStringData(): string {
        if (typeof this.data === 'string' || typeof this.data === 'number') {
            return this.data;
        } else if (this.isRowTotal && !isNullOrUndefined(this.data)) {
            this.logService.error(
                new Error(
                    `Expected data type String for cell in total row with type "totalRowTypeAsString" for column key:${this.column.key}`
                )
            );
            return ' ';
        } else if (this.isRowTotal && isNullOrUndefined(this.data)) {
            return ' '; // for total row cell as string if data not arrive
        }
        return isNull(this.data) ? null : undefined;
    }

    get isRowTotal(): boolean {
        return !isNullOrUndefined(this.options.hasTotalsRow) && this.options.hasTotalsRow && this.position.x === 0;
    }

    get isSmallActionButton(): boolean {
        return !!this.options && !!this.options.rowHeight && this.options.rowHeight === TableRowHeight.Small;
    }

    get nativeElement(): Node {
        return this.column && typeof this.column.renderNativeElement === 'function'
            ? this.column.renderNativeElement(this.data, this.position, this.row)
            : null;
    }

    get cellRemoveActionIcon(): IconData {
        return this.options?.remove && this.options.remove?.icon ? this.options.remove.icon : DEFAULT_REMOVE_ICON_V3;
    }

    get multipleActions(): TableMultipleActions {
        const actionsMenu = this.options?.rowActionsMenu;
        if (this.options?.rowActionsMenu && Array.isArray(this.options?.rowActionsMenu.actions)) {
            actionsMenu.actions = this.options?.rowActionsMenu?.actions.map(this.setDisableStateForFloatingAction.bind(this));
        }
        return actionsMenu;
    }

    private _data: CellDataType;
    private inlineInputViewOnlyText = '';

    constructor(
        public tableService: TableService,
        @Optional()
        @Inject(TABLE_OPTIONS_TOKEN)
        private tableModuleOptions: TableModuleOptions,
        private logService: LogService
    ) {}

    ngOnInit() {
        this.cellBorders =
            isNullOrUndefined(this.options.cellBorders) || this.tableService.isTypeCheckbox(this.column) ? true : this.options.cellBorders;

        this.innerElementWidth = this.column.width ? `calc(${this.column.width} - ${this.cellLRPadding})` : '';
        this.notAvailableText = this.options ? this.options.notAvailableText : null;
    }

    ngOnChanges(changes: SimpleChanges) {
        this.isInlineRemovable = this.isRemove;
        if (this.tableService.isTypeInputEdit(this.column) && changes?.data?.currentValue && !changes.data.firstChange) {
            this._setInputData();
        }

        if (this.tableService.isTypeComponent(this.column) && (changes?.data?.currentValue || changes?.column?.currentValue)) {
            this.renderCustomElement();
        }

        if (changes?.data?.firstChange && changes?.data?.currentValue?.value?.viewOnlyText) {
            this.inlineInputViewOnlyText = changes.data.currentValue.value.viewOnlyText;
        }
    }

    _setInputData() {
        this.initInputData = !isNullOrUndefined(this.column.dataParser)
            ? this.column.dataParser((this.data as FormControl).value)
            : (this.data as FormControl).value;
    }

    getRemoveIconTooltipText(): string {
        return this.options && this.options.remove && this.options.remove.tooltip && this.options.remove.tooltip.text
            ? this.options.remove.tooltip.text
            : DEFAULT_REMOVE_TOOLTIP_TEXT;
    }

    isBoolean(variable): boolean {
        return isBoolean(variable);
    }

    isRowChecked(): boolean {
        return this.options.isGroupedTable ? (this.data as boolean) : this.isRowSelected;
    }

    isAsDate(date: any): boolean {
        return !isNaN(Date.parse(date.toString()));
    }

    onToggleChanged(newValue: boolean) {
        // set waiter for cell
        this.isInRequest$.next(true);
        this.dataChange.emit({
            newValue,
            onCellRequestDone: (isSuccess: boolean, error: {message: string; status: number}, stayInEditMode = false) => {
                if (isSuccess) {
                    this.data = newValue;
                } else {
                    this.data = !newValue;
                }
                this.isInRequest$.next(false);
            }
        });
    }

    onEndEdit(valuesOptions) {
        const formControl = this.data as FormControl;
        if (formControl.valid) {
            this.isInEditMode = false;
            const newValue = !isNullOrUndefined(this.column.dataParser) ? this.column.dataParser(formControl.value) : formControl.value;
            const prevValue = valuesOptions.currentValue;
            const inlineInputComponent = this.inlineInputEdit;
            if (newValue !== this.initInputData) {
                this.initInputData = newValue;
                // set waiter for cell
                this.isInRequest$.next(true);
                this.dataChange.emit({
                    newValue,
                    prevValue,
                    onCellRequestDone: (isSuccess: boolean, error: {message: string; status: number}, stayInEditMode = false) => {
                        if (!isSuccess) {
                            if (stayInEditMode) {
                                inlineInputComponent.setEditMode$.next(newValue);
                            } else {
                                this.inputError$.next(error && error.message);
                            }
                            this.initInputData = prevValue;
                        } else if (this.initInputData === '') {
                            this.inputError$.next('');
                            this.initInputData = formControl.value;
                        } else {
                            this.inputError$.next('');
                            const newInputValue = this.inlineInputViewOnlyText
                                ? {
                                      value: newValue,
                                      viewOnlyText: this.inlineInputViewOnlyText
                                  }
                                : newValue;
                            formControl.setValue(newInputValue, {
                                emitEvent: false
                            });
                        }
                        this.isInRequest$.next(false);
                    }
                });
            }
        } else {
            const allErrors = formControl.errors || {};
            Object.keys(allErrors).forEach(errorKey => {
                this.inputError$.next(this._getMessage(errorKey, this.column.customErrorMapping[errorKey] || {}));
            });
        }
    }

    onCancel() {
        this.inputError$.next('');
        this.isInEditMode = false;
    }

    onRowRemoveClicked($event: MouseEvent) {
        if ($event) {
            $event.preventDefault();
            $event.stopPropagation();
        }
        this.remove.emit();
    }

    getDateFormat(dateFormat: string): string {
        return dateFormat || 'd MMM yyyy';
    }

    getDateUTCFormat(ignoreTimeZone: boolean): string {
        return ignoreTimeZone ? null : 'UTC';
    }

    renderCustomElement() {
        if (this.column) {
            this.customCellData = {
                component: {
                    type: this.column.component,
                    data: this.data
                },
                element: this.nativeElement
            };
        }
    }

    menuItemClicked(action: MenuDropItem) {
        this.shownActionsMenu = false;
        this.tableService.rowActionClicked.emit({action: action, rowIndex: this.rowIndex, row: this.row});
    }

    onActionButtonClicked() {
        this.shownActionsMenu = true;
    }

    onActionMenuClickOutSide(target) {
        if (!target.closest('#' + this.actionsMenuButtonId)) {
            this.shownActionsMenu = false;
        }
    }

    private _getMessage(errorKey, {errorMessageKey = '', textMapping = []}): string {
        const tableModuleOptions = !isNullOrUndefined(this.tableModuleOptions) ? this.tableModuleOptions : {errorMessages: ERROR_MESSAGES};
        if (!tableModuleOptions.errorMessages) {
            tableModuleOptions.errorMessages = ERROR_MESSAGES;
        }
        let errorMessage = tableModuleOptions.errorMessages[errorMessageKey] || tableModuleOptions.errorMessages[errorKey];
        if (errorMessage) {
            errorMessage = errorMessage.replace('{NAME}', this.column.title);
            errorMessage = errorMessage.replace('{INNER-NAME}', this.column.title);
            if (textMapping && textMapping.length > 0) {
                textMapping.forEach(mappObj => {
                    errorMessage = errorMessage.replace(`{${mappObj.key}}`, mappObj.value);
                });
            }
        }
        return errorMessage;
    }

    setDisableStateForFloatingAction(menuItem: MenuDropItem): MenuDropItem {
        return this.options?.isFloatingActionDisabled && typeof this.options?.isFloatingActionDisabled === 'function'
            ? {...menuItem, disabled: this.options.isFloatingActionDisabled(this.row, menuItem)}
            : menuItem;
    }
}
