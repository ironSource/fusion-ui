import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FileDragAndDropDirective} from './file-drag-and-drop.directive';

@NgModule({
    imports: [CommonModule],
    declarations: [FileDragAndDropDirective],
    exports: [FileDragAndDropDirective]
})
export class FileDragAndDropModule {}
