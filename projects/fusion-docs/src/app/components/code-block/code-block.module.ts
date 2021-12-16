import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CodeBlockComponent} from './code-block.component';

@NgModule({
    declarations: [CodeBlockComponent],
    exports: [CodeBlockComponent],
    imports: [CommonModule]
})
export class CodeBlockModule {}
