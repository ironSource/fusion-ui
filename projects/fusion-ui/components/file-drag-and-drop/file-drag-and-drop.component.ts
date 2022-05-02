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
    @Input() elementIdForClick: string;
    //
    /**
     * for disabling file selection
     */
    @Input() set fileDragAndDropDisabled(value: boolean) {
        this.isDisabled = value;
    }
    /**
     * CSS class name will set to the host element on drag over state
     */
    @Input() set dragOverCSSClass(value: string) {
        this.dragOverCSS = value;
    }
    /**
     * input.file accept attribute (file select dialog only, not grad&&drop)
     */
    @Input() acceptFiles: string;
    /**
     * input.file multiple attribute (file select dialog only, not grad&&drop)
     */
    @Input() multipleFiles = false;
    /**
     * output event emitter (files: FileList)
     */
    @Output() onHandleFileDragAndDrop = new EventEmitter();

    isDisabled = false;
    dragOverCSS = 'fu-drag-over';

    handleSelectedFile(files: FileList) {
        this.onHandleFileDragAndDrop.emit(files);
    }
}
