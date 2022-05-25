import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MobilePreviewerComponent} from './mobile-previewer.component';
import {DynamicComponentsModule} from '@ironsource/fusion-ui/components/dynamic-components';
import {IconModule} from '@ironsource/fusion-ui/components/icon';

@NgModule({
    imports: [CommonModule, IconModule, DynamicComponentsModule],
    declarations: [MobilePreviewerComponent],
    exports: [MobilePreviewerComponent]
})
export class MobilePreviewerModule {}
