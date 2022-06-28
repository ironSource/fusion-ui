import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {TableCellIconExampleModule} from '../../components/table-cell-icon-exmpale';
import {PlaygroundComponent} from './playground.component';
import {PlaygroundRoutingModule} from './playground-routing.module';
import {CommonModule} from '@angular/common';
import {AddboxDropdownModule} from '@ironsource/fusion-ui/components/addbox-dropdown/v1';
import {MultiDropdownModule} from '@ironsource/fusion-ui/components/multi-dropdown/v1';
import {TagsInputModule} from '@ironsource/fusion-ui/components/tags-input/v1';
import {DropdownModule} from '@ironsource/fusion-ui/components/dropdown/v1';
import {ButtonModule} from '@ironsource/fusion-ui/components/button/v1';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {DynamicComponentsModule} from '@ironsource/fusion-ui/components/dynamic-components/v1';
import {RadioModule} from '@ironsource/fusion-ui/components/radio/v1';
import {RadioGroupModule} from '@ironsource/fusion-ui/components/radio-group/v2';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip/v1';
import {CheckboxModule} from '@ironsource/fusion-ui/components/checkbox/v1';
import {InputModule} from '@ironsource/fusion-ui/components/input/v1';
import {InputInlineModule} from '@ironsource/fusion-ui/components/input-inline/v1';
import {LoaderModule} from '@ironsource/fusion-ui/components/loader/v1';
import {LoaderInlineModule} from '@ironsource/fusion-ui/components/loader-inline/v1';
import {TagModule} from '@ironsource/fusion-ui/components/tag/v1';
import {TableModule} from '@ironsource/fusion-ui/components/table/v1';
import {ListBoxModule} from '@ironsource/fusion-ui/components/list-box/v1';
import {NotificationModule} from '@ironsource/fusion-ui/components/notification/v1';
import {ErrorMessageModule} from '@ironsource/fusion-ui/components/error-message/v1';
import {ToggleModule} from '@ironsource/fusion-ui/components/toggle/v1';
import {AccordionModule} from '@ironsource/fusion-ui/components/accordion/v2';
import {VideoPlayerModule} from '@ironsource/fusion-ui/components/video-player/v1';
import {CACHE_OPTIONS_TOKEN, CacheService} from '@ironsource/fusion-ui';

@NgModule({
    declarations: [PlaygroundComponent],
    imports: [
        CommonModule,
        PlaygroundRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        ButtonModule.forRoot({
            svgOptions: {assetsPath: environment.assetsPath}
        }),
        IconModule.forRoot({svgOptions: {assetsPath: environment.assetsPath}}),
        DynamicComponentsModule,
        // VideoPlayerModule.forRoot({svgOptions: {assetsPath: environment.assetsPath}})
        SvgModule.forRoot({assetsPath: environment.assetsPath}),
        RadioModule,
        RadioGroupModule,
        CheckboxModule,
        TooltipModule,
        InputModule,
        InputInlineModule,
        LoaderModule,
        LoaderInlineModule,
        DropdownModule,
        MultiDropdownModule,
        AddboxDropdownModule,
        TagModule,
        TagsInputModule,
        TableCellIconExampleModule,
        TableModule,
        ListBoxModule,
        NotificationModule,
        ErrorMessageModule,
        ToggleModule,
        AccordionModule,
        VideoPlayerModule
    ],
    providers: [
        // override cache service 'CACHE_OPTIONS'
        CacheService,
        {
            provide: CACHE_OPTIONS_TOKEN,
            useFactory: () => ({isLocalEnv: true, persistentKeyPrefix: '123'})
        }
    ]
})
export class PlaygroundModule {}
