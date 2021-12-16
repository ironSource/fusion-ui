import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GetObjectLengthPipe} from './get-object-length.pipe';

@NgModule({
    declarations: [GetObjectLengthPipe],
    exports: [GetObjectLengthPipe],
    providers: [GetObjectLengthPipe],
    imports: [CommonModule]
})
export class GetObjectLengthModule {}
