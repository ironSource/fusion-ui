import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WrapperComponent} from './wrapper.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AccordionModule} from '../../../../../../fusion-ui/src/lib/components/ui-components/accordion/accordion.module';
import {AlertModule} from '../../../../../../fusion-ui/src/lib/components/ui-components/alert/alert.module';
import {ButtonModule} from '../../../../../../fusion-ui/src/lib/components/ui-components/button/button.module';
import {DatepickerModule} from '../../../../../../fusion-ui/src/lib/components/ui-components/datepicker/datepicker.module';
import {FlagModule} from '../../../../../../fusion-ui/src/lib/components/ui-components/flag/flag.module';
import {HeaderModule} from '../../../../../../fusion-ui/src/lib/components/ui-components/header/header.module';
import {HeaderOverlayModule} from '../../../../../../fusion-ui/src/lib/components/ui-components/header-overlay/header-overlay.module';
import {IconModule} from '../../../../../../fusion-ui/src/lib/components/ui-components/icon/icon.module';
// prettier-ignore
import {
    IconHeaderActionModule
} from '../../../../../../fusion-ui/src/lib/components/ui-components/icon-header-action/icon-header-action.module';
// prettier-ignore
import {
    MultiDropdownModule
} from '../../../../../../fusion-ui/src/lib/components/ui-components/dropdown/multi-dropdown/multi-dropdown.module';
// prettier-ignore

import {
    AddboxDropdownModule
} from '../../../../../../fusion-ui/src/lib/components/ui-components/dropdown/addbox-dropdown/addbox-dropdown.module';
import {InputModule} from '../../../../../../fusion-ui/src/lib/components/ui-components/input/input.module';
import {InputInlineModule} from '../../../../../../fusion-ui/src/lib/components/ui-components/input-inline/input-inline.module';
import {LayoutV1Module} from '../../../../../../fusion-ui/src/lib/components/ui-components/layout-v1/layout-v1.module';
import {LayoutModule} from '../../../../../../fusion-ui/src/lib/components/ui-components/layout/layout.module';
import {ListBoxModule} from '../../../../../../fusion-ui/src/lib/components/ui-components/list-box/list-box.module';
import {LoaderModule} from '../../../../../../fusion-ui/src/lib/components/ui-components/loader/loader.module';
import {LoaderInlineModule} from '../../../../../../fusion-ui/src/lib/components/ui-components/loader-inline/loader-inline.module';
import {MenuModule} from '../../../../../../fusion-ui/src/lib/components/ui-components/menu/menu.module';
import {ModalModule} from '../../../../../../fusion-ui/src/lib/components/ui-components/modal/modal.module';
import {NotificationModule} from '../../../../../../fusion-ui/src/lib/components/ui-components/notification/notification.module';
import {PopupModule} from '../../../../../../fusion-ui/src/lib/components/ui-components/popup/popup.module';
import {RadioModule} from '../../../../../../fusion-ui/src/lib/components/ui-components/radio/radio.module';
import {RadioGroupModule} from '../../../../../../fusion-ui/src/lib/components/ui-components/radio-group/radio-group.module';
import {SvgModule} from '../../../../../../fusion-ui/src/lib/components/ui-components/svg/svg.module';
import {TableModule} from '../../../../../../fusion-ui/src/lib/components/ui-components/table/table.module';
import {TagModule} from '../../../../../../fusion-ui/src/lib/components/ui-components/tag/tag.module';
import {ToggleModule} from '../../../../../../fusion-ui/src/lib/components/ui-components/toggle/toggle.module';
import {TooltipModule} from '../../../../../../fusion-ui/src/lib/components/ui-components/tooltip/tooltip.module';
import {VideoPlayerModule} from '../../../../../../fusion-ui/src/lib/components/ui-components/video-player/video-player.module';
import {TagsInputModule} from '../../../../../../fusion-ui/src/lib/components/ui-components/dropdown/tags-input/tags-input.module';
import {ChartLabelsModule} from '../../../../../../fusion-ui/src/lib/components/ui-components/chart-labels/chart-labels.module';
import {ChartModule} from '../../../../../../fusion-ui/src/lib/components/ui-components/chart/chart.module';
import {IconSelectListModule} from '../../../../../../fusion-ui/src/lib/components/ui-components/icon-select-list/icon-select-list.module';
import {IconStatusModule} from '../../../../../../fusion-ui/src/lib/components/ui-components/icon-status/icon-status.module';
import {SwitcherModule} from '../../../../../../fusion-ui/src/lib/components/ui-components/switcher/switcher.module';
import {CalendarModule} from '../../../../../../fusion-ui/src/lib/components/ui-components/date/calendar/calendar.module';
import {DaterangeModule} from '../../../../../../fusion-ui/src/lib/components/ui-components/date/daterange/daterange.module';
import {MobilePreviewerModule} from '../../../../../../fusion-ui/src/lib/components/ui-components/mobile-previewer/mobile-previewer.module';
import {StatusLabelModule} from '../../../../../../fusion-ui/src/lib/components/ui-components/status-label/status-label.module';
import {ToastModule} from '../../../../../../fusion-ui/src/lib/components/ui-components/toast/toast.module';
import {TabsModule} from '../../../../../../fusion-ui/src/lib/components/ui-components/tabs/tabs.module';
import {SidebarModule} from '../../../../../../fusion-ui/src/lib/components/ui-components/sidebar/sidebar.module';
import {MonthPickerModule} from '../../../../../../fusion-ui/src/lib/components/ui-components/month-picker/month-picker.module';

@NgModule({
    declarations: [WrapperComponent],
    exports: [WrapperComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AccordionModule,
        AlertModule,
        ButtonModule,
        DatepickerModule,
        FlagModule,
        HeaderModule,
        HeaderOverlayModule,
        IconModule,
        IconHeaderActionModule,
        InputModule,
        InputInlineModule,
        LayoutV1Module,
        LayoutModule,
        ListBoxModule,
        LoaderModule,
        LoaderInlineModule,
        MenuModule,
        ModalModule,
        NotificationModule,
        PopupModule,
        RadioModule,
        RadioGroupModule,
        SvgModule.forRoot({
            assetsPath: 'https://fusion.ironsrc.net/assets'
        }),
        TableModule,
        TagModule,
        ToggleModule,
        TooltipModule,
        VideoPlayerModule,
        TagsInputModule,
        MultiDropdownModule,
        AddboxDropdownModule,
        ChartLabelsModule,
        ChartModule,
        IconSelectListModule,
        IconStatusModule,
        SwitcherModule,
        CalendarModule,
        DaterangeModule,
        MobilePreviewerModule,
        StatusLabelModule,
        ToastModule,
        TabsModule,
        SidebarModule,
        MonthPickerModule
    ]
})
export class WrapperModule {}
