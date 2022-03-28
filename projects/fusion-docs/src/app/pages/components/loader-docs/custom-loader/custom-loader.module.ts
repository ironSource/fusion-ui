import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomLoaderComponent, CustomLoaderHostComponent} from './custom-loader.component';
import {LoaderModule} from '@ironsource/fusion-ui';

@NgModule({
    declarations: [CustomLoaderComponent, CustomLoaderHostComponent],
    exports: [CustomLoaderComponent, CustomLoaderHostComponent],
    imports: [CommonModule, LoaderModule]
})
export class CustomLoaderModule {}
