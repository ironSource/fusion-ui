import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routing';
import {environment} from '../environments/environment';
import {SvgModule} from '@ironsource/fusion-ui/components/svg';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip/v2';
import {ReactiveFormsModule} from '@angular/forms';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {DaterangeModule} from '@ironsource/fusion-ui/components/daterange';
import {ChipFilterModule} from '@ironsource/fusion-ui/components/chip-filter';
import {ChipFiltersModule} from '@ironsource/fusion-ui/components/chip-filters';
import {DropdownDualMultiSelectModule} from '@ironsource/fusion-ui/components/dropdown-dual-multi-select';
import {DropdownModule} from '@ironsource/fusion-ui/components/dropdown';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SvgModule.forRoot({assetsPath: environment.assetsPath}),
        TooltipModule,
        IconModule,
        ReactiveFormsModule,
        DaterangeModule,
        ChipFilterModule,
        ChipFiltersModule,
        DropdownDualMultiSelectModule,
        DropdownModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
