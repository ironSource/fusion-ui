import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FileCsvUploadComponent} from './file-csv-upload.component';
import {FileDragAndDropModule} from '@ironsource/fusion-ui/components/file-drag-and-drop';

@NgModule({
    declarations: [FileCsvUploadComponent],
    imports: [CommonModule, FileDragAndDropModule],
    exports: [FileCsvUploadComponent]
})
export class FileCsvUploadModule {}
