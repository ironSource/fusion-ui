import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {ButtonLoadingComponent} from './button-loading.component';

@NgModule({
    declarations: [ButtonLoadingComponent],
    exports: [ButtonLoadingComponent],
    imports: [CommonModule, IconModule]
})
export class ButtonLoadingModule {}
