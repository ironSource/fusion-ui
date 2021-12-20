import {NgModule} from '@angular/core';
import {
    InputModule,
    LoaderModule,
    NotificationModule,
    ButtonModule,
    IconModule,
    DynamicComponentsModule,
    SvgModule,
    RadioModule,
    RadioGroupModule,
    CheckboxModule,
    TooltipModule,
    InputInlineModule,
    LoaderInlineModule,
    DropdownModule,
    MultiDropdownModule,
    AddboxDropdownModule,
    TagModule,
    TagsInputModule,
    TableModule,
    ListBoxModule,
    CacheService,
    CACHE_OPTIONS_TOKEN,
    IconComponent,
    ErrorMessageModule,
    ToggleModule
} from '@ironsrc/fusion-ui';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {TableCellIconExampleModule} from '../../components/table-cell-icon-exmpale';
import {PlaygroundComponent} from './playground.component';
import {PlaygroundRoutingModule} from './playground-routing.module';
import {CommonModule} from '@angular/common';
import {AccordionModule, ButtonComponent, VideoPlayerModule} from 'projects/fusion-ui/src/public-api';

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
