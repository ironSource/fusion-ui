import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoaderComponent} from './loader.component';
import {IconModule} from '../icon/icon.module';

@NgModule({
    declarations: [LoaderComponent],
    exports: [LoaderComponent],
    imports: [CommonModule, IconModule],
    entryComponents: [LoaderComponent]
})
export class LoaderModule {}
