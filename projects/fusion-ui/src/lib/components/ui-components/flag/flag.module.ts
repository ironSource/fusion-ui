import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlagComponent} from './flag.component';

@NgModule({
    declarations: [FlagComponent],
    exports: [FlagComponent],
    imports: [CommonModule]
})
export class FlagModule {}
