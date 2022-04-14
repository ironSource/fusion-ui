import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routing';
import {environment} from '../environments/environment';
import {IconModule, StyleVersion, SvgModule, TooltipModule} from '@ironsource/fusion-ui';
import {STYLE_VERSION_TOKEN} from '@ironsource/fusion-ui';
import {ChipFilterModule} from '@ironsource/fusion-ui/components/chip-filter';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SvgModule.forRoot({assetsPath: environment.assetsPath}),
        TooltipModule,
        ChipFilterModule,
        IconModule
    ],
    providers: [{provide: STYLE_VERSION_TOKEN, useFactory: () => StyleVersion.V2}],
    bootstrap: [AppComponent]
})
export class AppModule {}
