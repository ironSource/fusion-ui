import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoaderComponent} from './loader.component';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';

@NgModule({
    declarations: [LoaderComponent],
    exports: [LoaderComponent],
    imports: [CommonModule, IconModule]
})
export class LoaderModule {}
