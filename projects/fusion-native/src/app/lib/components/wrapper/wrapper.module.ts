import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WrapperComponent} from './wrapper.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AccordionModule} from '@ironsource/fusion-ui/components/accordion/v2';
import {AlertModule} from '@ironsource/fusion-ui/components/alert/v2';
import {ButtonModule} from '@ironsource/fusion-ui/components/button';
import {DatepickerModule} from '@ironsource/fusion-ui/components/datepicker';
import {FlagModule} from '@ironsource/fusion-ui/components/flag/v1';
import {HeaderModule} from '@ironsource/fusion-ui/components/header/v1';
import {HeaderOverlayModule} from '@ironsource/fusion-ui/components/header-overlay/v1';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
// prettier-ignore
import {
    IconHeaderActionModule
} from '@ironsource/fusion-ui/components/icon-header-action/v1';
// prettier-ignore
import {
    MultiDropdownModule
} from '@ironsource/fusion-ui/components/multi-dropdown';
// prettier-ignore

import {
    AddboxDropdownModule
} from '@ironsource/fusion-ui/components/addbox-dropdown/v1';
import {InputModule} from '@ironsource/fusion-ui/components/input';
import {InputInlineModule} from '@ironsource/fusion-ui/components/input-inline/v2';
import {LayoutModule as LayoutV1Module} from '@ironsource/fusion-ui/components/layout/v1';
import {LayoutModule} from '@ironsource/fusion-ui/components/layout/v2';
import {ListBoxModule} from '@ironsource/fusion-ui/components/list-box/v2';
import {LoaderModule} from '@ironsource/fusion-ui/components/loader/v2';
import {LoaderInlineModule} from '@ironsource/fusion-ui/components/loader-inline/v2';
import {MenuModule} from '@ironsource/fusion-ui/components/menu/v1';
import {ModalModule} from '@ironsource/fusion-ui/components/modal';
import {NotificationModule} from '@ironsource/fusion-ui/components/notification/v2';
import {PopupModule} from '@ironsource/fusion-ui/components/popup/v2';
import {RadioModule} from '@ironsource/fusion-ui/components/radio/v2';
import {RadioGroupModule} from '@ironsource/fusion-ui/components/radio-group/v2';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {TableModule} from '@ironsource/fusion-ui/components/table/v2';
import {TagModule} from '@ironsource/fusion-ui/components/tag/v2';
import {ToggleModule} from '@ironsource/fusion-ui/components/toggle/v2';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip';
import {VideoPlayerModule} from '@ironsource/fusion-ui/components/video-player';
import {TagsInputModule} from '@ironsource/fusion-ui/components/tags-input/v2';
import {ChartLabelsModule} from '@ironsource/fusion-ui/components/chart-labels/v2';
import {ChartModule} from '@ironsource/fusion-ui/components/chart/v2';
import {IconSelectListModule} from '@ironsource/fusion-ui/components/icon-select-list/v1';
import {IconStatusModule} from '@ironsource/fusion-ui/components/icon-status';
import {SwitcherModule} from '@ironsource/fusion-ui/components/switcher';
import {DaterangeModule} from '@ironsource/fusion-ui/components/daterange';
import {MobilePreviewerModule} from '@ironsource/fusion-ui/components/mobile-previewer/v2';
import {StatusLabelModule} from '@ironsource/fusion-ui/components/status-label/v2';
import {ToastModule} from '@ironsource/fusion-ui/components/toast/v2';
import {TabsModule} from '@ironsource/fusion-ui/components/tabs';
import {SidebarModule} from '@ironsource/fusion-ui/components/sidebar/v2';
import {MonthPickerModule} from '@ironsource/fusion-ui/components/month-picker/v2';

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
