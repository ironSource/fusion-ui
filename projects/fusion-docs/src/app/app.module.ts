import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routing';
import {environment} from '../environments/environment';
import {StyleVersion, SvgModule, TooltipModule} from 'projects/fusion-ui/src/public-api';
import {STYLE_VERSION_TOKEN} from '../../../fusion-ui/src/lib/services/version/style-version-config';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, SvgModule.forRoot({assetsPath: environment.assetsPath}), TooltipModule],
    providers: [{provide: STYLE_VERSION_TOKEN, useFactory: () => StyleVersion.V2}],
    bootstrap: [AppComponent]
})
export class AppModule {}
