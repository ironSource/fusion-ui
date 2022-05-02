import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routing';
import {environment} from '../environments/environment';
import {ChipFilterModule, IconModule, SvgModule, TooltipModule} from '@ironsource/fusion-ui';

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
    bootstrap: [AppComponent]
})
export class AppModule {}
