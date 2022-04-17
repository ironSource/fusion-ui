import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IconModule} from '@ironsource/fusion-ui/components/icon';
import {ButtonLoadingComponent} from '@ironsource/fusion-ui/components/button/v1/components/button-loading.component';

@NgModule({
    declarations: [ButtonLoadingComponent],
    exports: [ButtonLoadingComponent],
    imports: [CommonModule, IconModule]
})
export class ButtonLoadingModule {}
