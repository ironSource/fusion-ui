import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'fusion-file-drag-and-drop',
    templateUrl: './file-drag-and-drop.component.html',
    styleUrls: ['./file-drag-and-drop.component.scss']
})
export class FileDragAndDropComponent {
    /**
     * element ID for initial file selection dialog by click.
     * if not provided used click on host
     */
    @Input() buttonId: string;
    /**
     * for disabling file selection
     */
    @Input() disabled: boolean;
    /**
     * input.file accept attribute (file select dialog only, not grad&&drop)
     */
    @Input() accept: string;
    /**
     * input.file multiple attribute (file select dialog only, not grad&&drop)
     */
    @Input() multiple = false;
    /**
     * output event emitter (files: FileList)
     */
    @Output() handleFiles = new EventEmitter();

    handleSelectedFiles(files: FileList) {
        this.handleFiles.emit(files);
    }
}
