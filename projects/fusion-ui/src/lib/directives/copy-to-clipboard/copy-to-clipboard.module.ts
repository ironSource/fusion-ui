import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CopyToClipboardDirective} from './copy-to-clipboard.directive';

@NgModule({
    imports: [CommonModule],
    declarations: [CopyToClipboardDirective],
    exports: [CopyToClipboardDirective]
})
export class CopyToClipboardModule {}
