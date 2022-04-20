import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routing';
import {environment} from '../environments/environment';
import {SvgModule, TooltipModule} from '@ironsource/fusion-ui';
import {ModalModule} from '@ironsource/fusion-ui/components/modal';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), TooltipModule, ModalModule],
    bootstrap: [AppComponent]
})
export class AppModule {}
