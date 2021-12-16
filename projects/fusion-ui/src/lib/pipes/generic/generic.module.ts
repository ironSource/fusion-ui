import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GenericPipe} from './generic.pipe';

@NgModule({
    declarations: [GenericPipe],
    exports: [GenericPipe],
    providers: [GenericPipe],
    imports: [CommonModule]
})
export class GenericPipeModule {}
