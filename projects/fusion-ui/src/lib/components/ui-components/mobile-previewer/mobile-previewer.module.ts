import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MobilePreviewerComponent} from './mobile-previewer.component';
import {DynamicComponentsModule} from '../dynamic-components/dynamic-components.module';
import {IconModule} from '../icon/icon.module';

@NgModule({
    imports: [CommonModule, IconModule, DynamicComponentsModule],
    declarations: [MobilePreviewerComponent],
    exports: [MobilePreviewerComponent],
    entryComponents: [MobilePreviewerComponent]
})
export class MobilePreviewerModule {}
