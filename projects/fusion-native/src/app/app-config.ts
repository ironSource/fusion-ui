import {TableComponent} from '@ironsource/fusion-ui/components/table';
import {AccordionComponent} from '@ironsource/fusion-ui/components/accordion';
import {AlertComponent} from '@ironsource/fusion-ui/components/alert';
import {CheckboxComponent} from '@ironsource/fusion-ui/components/checkbox';
import {DatepickerComponent as DatepickerComponentV1} from '@ironsource/fusion-ui/components/datepicker/v1';
import {DatepickerComponent} from '@ironsource/fusion-ui/components/datepicker';
import {DropdownComponent} from '@ironsource/fusion-ui/components/dropdown';
import {MonthPickerComponent} from '@ironsource/fusion-ui/components/month-picker';
import {DropdownDualMultiSelectComponent} from '@ironsource/fusion-ui/components/dropdown-dual-multi-select';
import {MultiDropdownComponent} from '@ironsource/fusion-ui/components/dropdown';
import {AddboxDropdownComponent} from '@ironsource/fusion-ui/components/dropdown';
import {IconHeaderActionComponent} from '@ironsource/fusion-ui/components/icon-header-action';
import {FlagComponent} from '@ironsource/fusion-ui/components/flag';
import {HeaderComponent} from '@ironsource/fusion-ui/components/header';
import {HeaderOverlayComponent} from '@ironsource/fusion-ui/components/header-overlay';
import {IconComponent} from '@ironsource/fusion-ui/components/icon';
import {InputComponent} from '@ironsource/fusion-ui/components/input';
import {InputInlineComponent} from '@ironsource/fusion-ui/components/input-inline';
import {LayoutV1Component} from '@ironsource/fusion-ui/components/layout-v1';
import {LayoutComponent} from '@ironsource/fusion-ui/components/layout';
import {ListBoxComponent} from '@ironsource/fusion-ui/components/list-box';
import {LoaderComponent} from '@ironsource/fusion-ui/components/loader';
import {LoaderInlineComponent} from '@ironsource/fusion-ui/components/loader-inline';
import {MenuComponent} from '@ironsource/fusion-ui/components/menu';
import {ModalComponent} from '@ironsource/fusion-ui/components/modal';
import {NotificationComponent} from '@ironsource/fusion-ui/components/notification';
import {PopupComponent} from '@ironsource/fusion-ui/components/popup';
import {RadioComponent} from '@ironsource/fusion-ui/components/radio';
import {RadioGroupComponent} from '@ironsource/fusion-ui/components/radio-group';
import {SvgComponent} from '@ironsource/fusion-ui/components/svg';
import {TagComponent} from '@ironsource/fusion-ui/components/tag';
import {TagsInputComponent} from '@ironsource/fusion-ui/components/dropdown';
import {ToggleComponent} from '@ironsource/fusion-ui/components/toggle';
import {TooltipComponent} from '@ironsource/fusion-ui/components/tooltip/v3';
import {VideoPlayerComponent} from '@ironsource/fusion-ui/components/video-player';
import {ChartComponent} from '@ironsource/fusion-ui/components/chart';
import {ChartLabelsComponent} from '@ironsource/fusion-ui/components/chart-labels';
import {IconSelectListComponent} from '@ironsource/fusion-ui/components/icon-select-list';
import {IconStatusComponent} from '@ironsource/fusion-ui/components/icon-status';
import {SwitcherComponent} from '@ironsource/fusion-ui/components/switcher';
import {CalendarComponent as CalendarComponentV1} from '@ironsource/fusion-ui/components/calendar/v1';
import {CalendarComponent as CalendarComponentV2} from '@ironsource/fusion-ui/components/calendar/v2';
import {CalendarComponent} from '@ironsource/fusion-ui/components/calendar';
import {DaterangeComponent as DaterangeComponentV1} from '@ironsource/fusion-ui/components/daterange/v1';
import {DaterangeComponent as DaterangeComponentV2} from '@ironsource/fusion-ui/components/daterange/v2';
import {DaterangeComponent} from '@ironsource/fusion-ui/components/daterange';
import {MobilePreviewerComponent} from '@ironsource/fusion-ui/components/mobile-previewer';
import {StatusLabelComponent} from '@ironsource/fusion-ui/components/status-label';
import {ToastComponent} from '@ironsource/fusion-ui/components/toast';
import {TabsComponent as TabsComponentV2} from '@ironsource/fusion-ui/components/tabs/v2';
import {SidebarComponent} from '@ironsource/fusion-ui/components/sidebar';
import {SidebarMenuComponent} from '@ironsource/fusion-ui/components/sidebar';
import {TabsComponent, TabComponent} from '@ironsource/fusion-ui/components/tabs';
import {TextareaComponent} from '@ironsource/fusion-ui/components/textarea';
import {ButtonComponent} from '@ironsource/fusion-ui/components/button';
import {ChipFilterComponent} from '@ironsource/fusion-ui/components/chip-filter';
import {ChipFiltersComponent} from '@ironsource/fusion-ui/components/chip-filters';
import {FileDragAndDropComponent} from '@ironsource/fusion-ui/components/file-drag-and-drop';

// Services
import {ApiService} from '@ironsource/fusion-ui/services/api/api.service';
import {CacheService} from '@ironsource/fusion-ui/services/cache/cache.service';
import {LogService} from '@ironsource/fusion-ui/services/log/log.service';
import {UserService} from '@ironsource/fusion-ui/services/user/user.service';
import {PermissionsService} from '@ironsource/fusion-ui/services/permissions/permissions.service';
import {ApiResponseType} from '@ironsource/fusion-ui/services/api/api-entities';
import {CacheType} from '@ironsource/fusion-ui/services/cache/cache-entities';
import {ColorsService} from '@ironsource/fusion-ui/services/colors/colors.service';
import {TooltipService} from '@ironsource/fusion-ui/components/tooltip/common/base';
import {CalendarService} from '@ironsource/fusion-ui/components/calendar/common/base';
import {DaterangeService} from '@ironsource/fusion-ui/components/daterange/common/base';
import {PopupService} from '@ironsource/fusion-ui/components/popup';
import {ToastService} from '@ironsource/fusion-ui/components/toast';
import {NotificationService} from '@ironsource/fusion-ui/components/notification';
import {ModalService} from '@ironsource/fusion-ui/components/modal';

// enums
import {NotificationType} from '@ironsource/fusion-ui/components/notification';
import {DatepickerMode} from '@ironsource/fusion-ui/components/datepicker/v1';
import {HeaderSizes} from '@ironsource/fusion-ui/components/header-overlay';
import {InlineInputType} from '@ironsource/fusion-ui/components/input-inline';
import {ListBoxModes} from '@ironsource/fusion-ui/components/list-box';
import {PopupLocation} from '@ironsource/fusion-ui/components/popup';
import {TableColumnTypeEnum} from '@ironsource/fusion-ui/components/table';
import {TooltipPosition, TooltipType} from '@ironsource/fusion-ui/components/tooltip/common/base';
import {FormControlStatus} from '@ironsource/fusion-ui/components/error-message';
import {SwitcherMode} from '@ironsource/fusion-ui/components/switcher';
import {DaterangePresets} from '@ironsource/fusion-ui/components/daterange/entities';
import {MobileOrientation} from '@ironsource/fusion-ui/components/mobile-previewer';

const PREFIX = 'native-fusion';

export const services = {
    apiService: ApiService,
    cacheService: CacheService,
    logService: LogService,
    userService: UserService,
    permissionService: PermissionsService,
    modalService: ModalService,
    notificationService: NotificationService,
    tooltipService: TooltipService,
    popupService: PopupService,
    colorsService: ColorsService,
    calendarService: CalendarService,
    daterangeService: DaterangeService,
    toastService: ToastService
};

/* eslint-disable object-shorthand */
export const enums = {
    NotificationType: NotificationType,
    DatepickerMode: DatepickerMode,
    HeaderSizes: HeaderSizes,
    InlineInputType: InlineInputType,
    ListBoxModes: ListBoxModes,
    PopupLocation: PopupLocation,
    TableColumnType: TableColumnTypeEnum,
    TooltipPosition: TooltipPosition,
    TooltipType: TooltipType,
    FormControlStatus: FormControlStatus,
    ApiResponseType: ApiResponseType,
    CacheType: CacheType,
    SwitcherMode: SwitcherMode,
    DaterangePresets: DaterangePresets,
    MobileOrientation: MobileOrientation
};
/* eslint-enable object-shorthand */

export const components = [
    {name: `${PREFIX}-table`, componentInstance: TableComponent},
    {name: `${PREFIX}-button`, componentInstance: ButtonComponent},
    {name: `${PREFIX}-accordion`, componentInstance: AccordionComponent},
    {name: `${PREFIX}-alert`, componentInstance: AlertComponent},
    {name: `${PREFIX}-checkbox`, componentInstance: CheckboxComponent, type: `checkbox`},
    {name: `${PREFIX}-datepicker-v1`, componentInstance: DatepickerComponentV1},
    {name: `${PREFIX}-datepicker`, componentInstance: DatepickerComponent},
    {name: `${PREFIX}-month-picker`, componentInstance: MonthPickerComponent},
    {name: `${PREFIX}-dropdown`, componentInstance: DropdownComponent},
    {name: `${PREFIX}-multi-dropdown`, componentInstance: MultiDropdownComponent},
    {name: `${PREFIX}-addbox-dropdown`, componentInstance: AddboxDropdownComponent},
    {name: `${PREFIX}-flag`, componentInstance: FlagComponent},
    {name: `${PREFIX}-header`, componentInstance: HeaderComponent},
    {name: `${PREFIX}-header-overlay`, componentInstance: HeaderOverlayComponent},
    {name: `${PREFIX}-icon`, componentInstance: IconComponent},
    {name: `${PREFIX}-icon-header-action`, componentInstance: IconHeaderActionComponent},
    {name: `${PREFIX}-input`, componentInstance: InputComponent, avoidJsonParse: true},
    {name: `${PREFIX}-input-inline`, componentInstance: InputInlineComponent},
    {name: `${PREFIX}-layout-v1`, componentInstance: LayoutV1Component},
    {name: `${PREFIX}-layout`, componentInstance: LayoutComponent},
    {name: `${PREFIX}-sidebar`, componentInstance: SidebarComponent},
    {name: `${PREFIX}-sidebar-menu`, componentInstance: SidebarMenuComponent},
    {name: `${PREFIX}-list-box`, componentInstance: ListBoxComponent},
    {name: `${PREFIX}-loader`, componentInstance: LoaderComponent},
    {name: `${PREFIX}-loader-inline`, componentInstance: LoaderInlineComponent},
    {name: `${PREFIX}-menu`, componentInstance: MenuComponent},
    {name: `${PREFIX}-modal`, componentInstance: ModalComponent},
    {name: `${PREFIX}-notification`, componentInstance: NotificationComponent},
    {name: `${PREFIX}-popup`, componentInstance: PopupComponent},
    {name: `${PREFIX}-radio`, componentInstance: RadioComponent},
    {name: `${PREFIX}-radio-group`, componentInstance: RadioGroupComponent},
    {name: `${PREFIX}-svg`, componentInstance: SvgComponent},
    {name: `${PREFIX}-tag`, componentInstance: TagComponent},
    {name: `${PREFIX}-tags-input`, componentInstance: TagsInputComponent},
    {name: `${PREFIX}-toggle`, componentInstance: ToggleComponent, type: `checkbox`},
    {name: `${PREFIX}-tooltip`, componentInstance: TooltipComponent},
    {name: `${PREFIX}-video-player`, componentInstance: VideoPlayerComponent},
    {name: `${PREFIX}-chart`, componentInstance: ChartComponent},
    {name: `${PREFIX}-chart-labels`, componentInstance: ChartLabelsComponent},
    {name: `${PREFIX}-icon-select-list`, componentInstance: IconSelectListComponent},
    {name: `${PREFIX}-icon-status`, componentInstance: IconStatusComponent},
    {name: `${PREFIX}-switcher`, componentInstance: SwitcherComponent},
    {name: `${PREFIX}-calendar-v1`, componentInstance: CalendarComponentV1},
    {name: `${PREFIX}-calendar-v2`, componentInstance: CalendarComponentV2},
    {name: `${PREFIX}-calendar`, componentInstance: CalendarComponent},
    {name: `${PREFIX}-daterange-v1`, componentInstance: DaterangeComponentV1},
    {name: `${PREFIX}-daterange-v2`, componentInstance: DaterangeComponentV2},
    {name: `${PREFIX}-daterange`, componentInstance: DaterangeComponent},
    {name: `${PREFIX}-mobile-previewer`, componentInstance: MobilePreviewerComponent},
    {name: `${PREFIX}-status-label`, componentInstance: StatusLabelComponent},
    {name: `${PREFIX}-toast`, componentInstance: ToastComponent},
    {name: `${PREFIX}-textarea`, componentInstance: TextareaComponent, avoidJsonParse: true},
    {name: `${PREFIX}-tabs-v2`, componentInstance: TabsComponentV2},
    {name: `${PREFIX}-dropdown-dual-multi-select`, componentInstance: DropdownDualMultiSelectComponent},
    {name: `${PREFIX}-tabs`, componentInstance: TabsComponent},
    {name: `${PREFIX}-tab`, componentInstance: TabComponent},
    {name: `${PREFIX}-chip-filter`, componentInstance: ChipFilterComponent},
    {name: `${PREFIX}-chip-filters`, componentInstance: ChipFiltersComponent},
    {name: `${PREFIX}-file-drag-and-drop`, componentInstance: FileDragAndDropComponent}
];
