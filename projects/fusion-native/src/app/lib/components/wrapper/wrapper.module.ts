import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WrapperComponent} from './wrapper.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AccordionModule} from '@ironsource/fusion-ui/components/accordion';
import {AlertModule} from '@ironsource/fusion-ui/components/alert';
import {ButtonModule} from '@ironsource/fusion-ui/components/button';
import {DatepickerModule} from '@ironsource/fusion-ui/components/datepicker';
import {FlagModule} from '@ironsource/fusion-ui/components/flag';
import {HeaderModule} from '@ironsource/fusion-ui/components/header';
import {HeaderOverlayModule} from '@ironsource/fusion-ui/components/header-overlay';
import {IconModule} from '@ironsource/fusion-ui/components/icon';
// prettier-ignore
import {
    IconHeaderActionModule
} from '@ironsource/fusion-ui/components/icon-header-action';
// prettier-ignore
import {
    MultiDropdownModule
} from '@ironsource/fusion-ui/components/multi-dropdown';
// prettier-ignore

import {
    AddboxDropdownModule
} from '@ironsource/fusion-ui/components/addbox-dropdown';
import {InputModule} from '@ironsource/fusion-ui/components/input';
import {InputInlineModule} from '@ironsource/fusion-ui/components/input-inline';
import {LayoutV1Module} from '@ironsource/fusion-ui/components/layout-v1';
import {LayoutModule} from '@ironsource/fusion-ui/components/layout';
import {ListBoxModule} from '@ironsource/fusion-ui/components/list-box';
import {LoaderModule} from '@ironsource/fusion-ui/components/loader';
import {LoaderInlineModule} from '@ironsource/fusion-ui/components/loader-inline';
import {MenuModule} from '@ironsource/fusion-ui/components/menu';
import {ModalModule} from '@ironsource/fusion-ui/components/modal';
import {NotificationModule} from '@ironsource/fusion-ui/components/notification';
import {PopupModule} from '@ironsource/fusion-ui/components/popup';
import {RadioModule} from '@ironsource/fusion-ui/components/radio';
import {RadioGroupModule} from '@ironsource/fusion-ui/components/radio-group';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {TableModule} from '@ironsource/fusion-ui/components/table';
import {TagModule} from '@ironsource/fusion-ui/components/tag';
import {ToggleModule} from '@ironsource/fusion-ui/components/toggle';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip';
import {VideoPlayerModule} from '@ironsource/fusion-ui/components/video-player';
import {TagsInputModule} from '@ironsource/fusion-ui/components/tags-input';
import {ChartLabelsModule} from '@ironsource/fusion-ui/components/chart-labels';
import {ChartModule} from '@ironsource/fusion-ui/components/chart';
import {IconSelectListModule} from '@ironsource/fusion-ui/components/icon-select-list';
import {IconStatusModule} from '@ironsource/fusion-ui/components/icon-status';
import {SwitcherModule} from '@ironsource/fusion-ui/components/switcher';
import {DaterangeModule} from '@ironsource/fusion-ui/components/daterange';
import {MobilePreviewerModule} from '@ironsource/fusion-ui/components/mobile-previewer';
import {StatusLabelModule} from '@ironsource/fusion-ui/components/status-label';
import {ToastModule} from '@ironsource/fusion-ui/components/toast';
import {TabsModule} from '@ironsource/fusion-ui/components/tabs';
import {SidebarModule} from '@ironsource/fusion-ui/components/sidebar';
import {MonthPickerModule} from '@ironsource/fusion-ui/components/month-picker';

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
