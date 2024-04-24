import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TeleportingDirective} from './teleporting.directive';

@NgModule({
    declarations: [TeleportingDirective],
    exports: [TeleportingDirective],
    imports: [CommonModule]
})
export class TeleportingModule {}
