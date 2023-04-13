import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DocsComponent} from './docs.component';
import {DocsRoutingModule} from './docs-routing.module';
import {LayoutModule} from '@ironsource/fusion-ui/components/layout/v2';
import {LayoutModule as LayoutV1Module} from '@ironsource/fusion-ui/components/layout/v1';
import {environment} from '../../../environments/environment';
import {StyleVersionButtonModule} from '../../components/style-version-button/style-version-button.module';
import {MenuItemExampleModule} from '../../components/menu-item-example/menu-item-example.module';
import {LayoutComponent} from '@ironsource/fusion-ui/components/layout/v4';
import {TopFilterIncludeExcludeComponent} from '@ironsource/fusion-ui/components/top-filter-include-exclude';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [DocsComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DocsRoutingModule,
        LayoutComponent,
        TopFilterIncludeExcludeComponent
        // LayoutV1Module.forRoot({svgOptions: {assetsPath: environment.assetsPath}}),
        /*LayoutModule.forRoot({svgOptions: {assetsPath: environment.assetsPath}}),*/
        /*StyleVersionButtonModule,*/
        /*MenuItemExampleModule*/
    ]
})
export class DocsModule {}
