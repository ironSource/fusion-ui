import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DocsComponent} from './docs.component';
import {DocsRoutingModule} from './docs-routing.module';
import {LayoutV1Module, LayoutModule} from 'projects/fusion-ui/src/public-api';
import {environment} from '../../../environments/environment';
import {StyleVersionButtonModule} from '../../components/style-version-button/style-version-button.module';
import {MenuItemExampleModule} from '../../components/menu-item-example/menu-item-example.module';

@NgModule({
    declarations: [DocsComponent],
    imports: [
        CommonModule,
        DocsRoutingModule,
        LayoutV1Module.forRoot({svgOptions: {assetsPath: environment.assetsPath}}),
        LayoutModule.forRoot({svgOptions: {assetsPath: environment.assetsPath}}),
        StyleVersionButtonModule,
        MenuItemExampleModule
    ]
})
export class DocsModule {}
