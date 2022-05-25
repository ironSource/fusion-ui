import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routing';
import {environment} from '../environments/environment';
import {SvgModule} from '@ironsource/fusion-ui';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip/v2';
import {SwitcherModule} from '@ironsource/fusion-ui/components/switcher/v3';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SvgModule.forRoot({assetsPath: environment.assetsPath}),
        TooltipModule,
        SwitcherModule,
        ReactiveFormsModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
