import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FileDragAndDropDirective} from './file-drag-and-drop.directive';
import {FileDragAndDropComponent} from './file-drag-and-drop.component';

@NgModule({
    imports: [CommonModule],
    declarations: [FileDragAndDropDirective, FileDragAndDropComponent],
    exports: [FileDragAndDropDirective, FileDragAndDropComponent]
})
export class FileDragAndDropModule {}
