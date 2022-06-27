import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routing';
import {environment} from '../environments/environment';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip/v2';
import {ReactiveFormsModule} from '@angular/forms';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {ModalModule} from '@ironsource/fusion-ui/components/modal';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SvgModule.forRoot({assetsPath: environment.assetsPath}),
        TooltipModule,
        IconModule,
        ReactiveFormsModule,
        ModalModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
