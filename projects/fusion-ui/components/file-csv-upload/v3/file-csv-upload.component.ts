import {Component} from '@angular/core';
import {FileDragAndDropComponent} from '@ironsource/fusion-ui/components/file-drag-and-drop';

@Component({
    selector: 'fusion-file-csv-upload',
    templateUrl: './file-csv-upload.component.html',
    styleUrls: ['./file-csv-upload.component.scss']
})
export class FileCsvUploadComponent extends FileDragAndDropComponent {}
