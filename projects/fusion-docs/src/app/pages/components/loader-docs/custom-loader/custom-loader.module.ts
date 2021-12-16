import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomLoaderComponent, CustomLoaderHostComponent} from './custom-loader.component';
import {LoaderModule} from '../../../../../../../fusion-ui/src/public-api';

@NgModule({
    declarations: [CustomLoaderComponent, CustomLoaderHostComponent],
    exports: [CustomLoaderComponent, CustomLoaderHostComponent],
    entryComponents: [CustomLoaderComponent],
    imports: [CommonModule, LoaderModule]
})
export class CustomLoaderModule {}
