import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routing';
import {environment} from '../environments/environment';
import {IconModule, SvgModule} from '@ironsource/fusion-ui';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip/v2';
import {ChipFilterModule} from '@ironsource/fusion-ui/components/chip-filter';
import {ChipFiltersModule} from '@ironsource/fusion-ui/components/chip-filters';
import {ReactiveFormsModule} from '@angular/forms';
import {DaterangeModule} from '@ironsource/fusion-ui/components/daterange';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SvgModule.forRoot({assetsPath: environment.assetsPath}),
        TooltipModule,
        ChipFilterModule,
        ChipFiltersModule,
        IconModule,
        DaterangeModule,
        ReactiveFormsModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
