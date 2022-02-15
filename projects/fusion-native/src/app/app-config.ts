import {TableComponent} from '../../../fusion-ui/src/lib/components/ui-components/table/table/table.component';
import {AccordionComponent} from '../../../fusion-ui/src/lib/components/ui-components/accordion/accordion.component';
import {AlertComponent} from '../../../fusion-ui/src/lib/components/ui-components/alert/alert.component';
import {CheckboxComponent} from '../../../fusion-ui/src/lib/components/ui-components/checkbox/checkbox.component';
import {DatepickerComponent} from '../../../fusion-ui/src/lib/components/ui-components/datepicker/datepicker.component';
import {DropdownComponent} from '../../../fusion-ui/src/lib/components/ui-components/dropdown/dropdown/dropdown.component';
import {MonthPickerComponent} from '../../../fusion-ui/src/lib/components/ui-components/month-picker/month-picker.component';
import {DropdownDualMultiSelectComponent} from '../../../fusion-ui/src/lib/components/ui-components/dropdown-dual-multi-select/dropdown-dual-multi-select.component';
// prettier-ignore
import {
    MultiDropdownComponent
} from '../../../fusion-ui/src/lib/components/ui-components/dropdown/multi-dropdown/multi-dropdown.component';
// prettier-ignore
import {
    AddboxDropdownComponent
} from '../../../fusion-ui/src/lib/components/ui-components/dropdown/addbox-dropdown/addbox-dropdown.component';
// prettier-ignore
import {
    IconHeaderActionComponent
} from '../../../fusion-ui/src/lib/components/ui-components/icon-header-action/icon-header-action.component';

import {FlagComponent} from '../../../fusion-ui/src/lib/components/ui-components/flag/flag.component';
import {HeaderComponent} from '../../../fusion-ui/src/lib/components/ui-components/header/header.component';
import {HeaderOverlayComponent} from '../../../fusion-ui/src/lib/components/ui-components/header-overlay/header-overlay.component';
import {IconComponent} from '../../../fusion-ui/src/lib/components/ui-components/icon/icon.component';
import {InputComponent} from '../../../fusion-ui/src/lib/components/ui-components/input/input.component';
import {InputInlineComponent} from '../../../fusion-ui/src/lib/components/ui-components/input-inline/input-inline.component';
import {LayoutV1Component} from '../../../fusion-ui/src/lib/components/ui-components/layout-v1/layout-v1.component';
import {LayoutComponent} from '../../../fusion-ui/src/lib/components/ui-components/layout/layout.component';
import {ListBoxComponent} from '../../../fusion-ui/src/lib/components/ui-components/list-box/list-box.component';
import {LoaderComponent} from '../../../fusion-ui/src/lib/components/ui-components/loader/loader.component';
import {LoaderInlineComponent} from '../../../fusion-ui/src/lib/components/ui-components/loader-inline/loader-inline.component';
import {MenuComponent} from '../../../fusion-ui/src/lib/components/ui-components/menu/menu/menu.component';
import {ModalComponent} from '../../../fusion-ui/src/lib/components/ui-components/modal/modal/modal.component';
import {NotificationComponent} from '../../../fusion-ui/src/lib/components/ui-components/notification/notification.component';
import {PopupComponent} from '../../../fusion-ui/src/lib/components/ui-components/popup/popup.component';
import {RadioComponent} from '../../../fusion-ui/src/lib/components/ui-components/radio/radio.component';
import {RadioGroupComponent} from '../../../fusion-ui/src/lib/components/ui-components/radio-group/radio-group.component';
import {SvgComponent} from '../../../fusion-ui/src/lib/components/ui-components/svg/svg.component';
import {TagComponent} from '../../../fusion-ui/src/lib/components/ui-components/tag/tag.component';
import {TagsInputComponent} from '../../../fusion-ui/src/lib/components/ui-components/dropdown/tags-input/tags-input.component';
import {ToggleComponent} from '../../../fusion-ui/src/lib/components/ui-components/toggle/toggle.component';
import {TooltipComponent} from '../../../fusion-ui/src/lib/components/ui-components/tooltip/tooltip.component';
import {VideoPlayerComponent} from '../../../fusion-ui/src/lib/components/ui-components/video-player/video-player.component';
import {ChartComponent} from '../../../fusion-ui/src/lib/components/ui-components/chart/chart.component';
import {ChartLabelsComponent} from '../../../fusion-ui/src/lib/components/ui-components/chart-labels/chart-labels.component';
import {IconSelectListComponent} from '../../../fusion-ui/src/lib/components/ui-components/icon-select-list/icon-select-list.component';
import {IconStatusComponent} from '../../../fusion-ui/src/lib/components/ui-components/icon-status/icon-status.component';
import {SwitcherComponent} from '../../../fusion-ui/src/lib/components/ui-components/switcher/switcher.component';
import {CalendarComponent} from '../../../fusion-ui/src/lib/components/ui-components/date/calendar/calendar.component';
import {DaterangeComponent} from '../../../fusion-ui/src/lib/components/ui-components/date/daterange/daterange.component';
import {MobilePreviewerComponent} from '../../../fusion-ui/src/lib/components/ui-components/mobile-previewer/mobile-previewer.component';
import {StatusLabelComponent} from '../../../fusion-ui/src/lib/components/ui-components/status-label/status-label.component';
import {ToastComponent} from '../../../fusion-ui/src/lib/components/ui-components/toast/toast.component';
import {TabsComponent} from '../../../fusion-ui/src/lib/components/ui-components/tabs/tabs.component';
import {SidebarComponent} from '../../../fusion-ui/src/lib/components/ui-components/sidebar/sidebar.component';
import {SidebarMenuComponent} from '../../../fusion-ui/src/lib/components/ui-components/sidebar/sidebar-menu/sidebar-menu.component';

// Services
import {ApiService} from '../../../fusion-ui/src/lib/services/api/api.service';
import {CacheService} from '../../../fusion-ui/src/lib/services/cache/cache.service';
import {LogService} from '../../../fusion-ui/src/lib/services/log/log.service';
import {UserService} from '../../../fusion-ui/src/lib/services/user/user.service';
import {PermissionsService} from '../../../fusion-ui/src/lib/services/permissions/permissions.service';
import {ModalService} from '../../../fusion-ui/src/lib/components/ui-components/modal/modal.service';
import {NotificationService} from '../../../fusion-ui/src/lib/components/ui-components/notification/notification.service';
import {TooltipService} from '../../../fusion-ui/src/lib/components/ui-components/tooltip/tooltip.service';
import {PopupService} from '../../../fusion-ui/src/lib/components/ui-components/popup/popup.service';
import {CalendarService} from '../../../fusion-ui/src/lib/components/ui-components/date/calendar/calendar.service';
import {DaterangeService} from '../../../fusion-ui/src/lib/components/ui-components/date/daterange/daterange.service';
import {ToastService} from '../../../fusion-ui/src/lib/components/ui-components/toast/toast.service';

// enums
import {NotificationType} from '../../../fusion-ui/src/lib/components/ui-components/notification/notification-type';
import {DatepickerMode} from '../../../fusion-ui/src/lib/components/ui-components/datepicker/datepicker-mode';
import {HeaderSizes} from '../../../fusion-ui/src/lib/components/ui-components/header-overlay/header-sizes.enum';
import {InlineInputType} from '../../../fusion-ui/src/lib/components/ui-components/input-inline/inline-input-type.enum';
import {ListBoxModes} from '../../../fusion-ui/src/lib/components/ui-components/list-box/entities/list-box-modes';
import {PopupLocation} from '../../../fusion-ui/src/lib/components/ui-components/popup/popup.entity';
import {TableColumnTypeEnum} from '../../../fusion-ui/src/lib/components/ui-components/table/entities';
import {TooltipPosition, TooltipType} from '../../../fusion-ui/src/lib/components/ui-components/tooltip/tooltip.entities';
import {FormControlStatus} from '../../../fusion-ui/src/lib/directives/error-message/error-message.config';
import {ApiResponseType} from '../../../fusion-ui/src/lib/services/api/api-entities';
import {CacheType} from '../../../fusion-ui/src/lib/services/cache/cache-entities';
import {ColorsService} from '../../../fusion-ui/src/lib/services/colors/colors.service';
import {SwitcherMode} from '../../../fusion-ui/src/lib/components/ui-components/switcher/entities/switcher-mode.enum';
import {DaterangePresets} from '../../../fusion-ui/src/lib/components/ui-components/date/entities/daterange-presets.enum';
import {MobileOrientation} from '../../../fusion-ui/src/lib/components/ui-components/mobile-previewer/mobile-orientation.enum';
import {TextareaComponent} from '../../../fusion-ui/src/lib/components/ui-components/textarea/textarea.component';
import {ButtonComponent} from '../../../fusion-ui/src/lib/components/ui-components/button/button.component';

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
    {name: `${PREFIX}-calendar`, componentInstance: CalendarComponent},
    {name: `${PREFIX}-daterange`, componentInstance: DaterangeComponent},
    {name: `${PREFIX}-mobile-previewer`, componentInstance: MobilePreviewerComponent},
    {name: `${PREFIX}-status-label`, componentInstance: StatusLabelComponent},
    {name: `${PREFIX}-toast`, componentInstance: ToastComponent},
    {name: `${PREFIX}-textarea`, componentInstance: TextareaComponent, avoidJsonParse: true},
    {name: `${PREFIX}-tabs`, componentInstance: TabsComponent},
    {name: `${PREFIX}-dropdown-dual-multi-select`, componentInstance: DropdownDualMultiSelectComponent}
];
