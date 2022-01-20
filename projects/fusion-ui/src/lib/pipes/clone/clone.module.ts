import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClonePipe} from './clone.pipe';

@NgModule({
    declarations: [ClonePipe],
    exports: [ClonePipe],
    providers: [ClonePipe],
    imports: [CommonModule]
})
export class CloneModule {}
