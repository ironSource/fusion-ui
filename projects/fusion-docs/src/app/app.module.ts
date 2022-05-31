import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routing';
import {environment} from '../environments/environment';
import {IconModule} from '@ironsource/fusion-ui/components/icon';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip/v3';
import {ReactiveFormsModule} from '@angular/forms';
import {ModalModule} from '@ironsource/fusion-ui/components/modal/v3';
import {ButtonModule} from '@ironsource/fusion-ui/components/button/v3';
import {DropdownModule} from '@ironsource/fusion-ui';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SvgModule.forRoot({assetsPath: environment.assetsPath}),
        TooltipModule,
        IconModule,
        ReactiveFormsModule,
        ModalModule,
        ButtonModule,
        DropdownModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
