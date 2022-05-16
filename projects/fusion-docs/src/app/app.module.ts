import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routing';
import {environment} from '../environments/environment';
import {SvgModule} from '@ironsource/fusion-ui';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip';
import {ChipFilterModule} from '@ironsource/fusion-ui/components/chip-filter';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), TooltipModule, ChipFilterModule],
    bootstrap: [AppComponent]
})
export class AppModule {}
