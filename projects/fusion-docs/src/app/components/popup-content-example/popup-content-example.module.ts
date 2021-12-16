import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PopupContentExampleComponent} from './popup-content-example.component';
import {IconModule} from '../../../../../fusion-ui/src/lib/components/ui-components/icon/icon.module';

@NgModule({
    declarations: [PopupContentExampleComponent],
    imports: [CommonModule, IconModule],
    exports: [PopupContentExampleComponent]
})
export class PopupContentExampleModule {}
