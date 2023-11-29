import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FileDragAndDropState} from '@ironsource/fusion-ui/components/file-drag-and-drop';
import {UniqueIdService} from '@ironsource/fusion-ui/services/unique-id';
import {IconData} from '@ironsource/fusion-ui/components/icon/common/entities';
import {isNullOrUndefined} from '@ironsource/fusion-ui/utils';

@Component({
    selector: 'fusion-file-csv-upload',
    templateUrl: './file-csv-upload.component.html',
    styleUrls: ['./file-csv-upload.component.scss'],
    host: {'ui-version': '3'}
})
export class FileCsvUploadComponent {
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
     * for loading file selection
     */
    @Input() loading: boolean;
    /**
     * Tile text
     * @param value
     */
    @Input() set title(value: string) {
        if (!isNullOrUndefined(value)) {
            this._title = value;
        }
    }
    /**
     * General component error
     * @param value
     */
    @Input() set error(value: string) {
        this._error = value;
    }
    /**
     * General component helper text
     * @param value
     */
    @Input() set helper(value: string) {
        this._helper = value;
    }
    /**
     * File state
     * @param value
     */
    @Input() set fileState(value: FileDragAndDropState) {
        this._fileState = value ?? {name: ''};
    }

    /**
     * output event emitter (files: FileList)
     */
    @Output() handleFiles = new EventEmitter();
    /**
     * Event on button replace was clicked
     */
    @Output() replaceFile = new EventEmitter<string>();
    /**
     * Event on button delete was clicked
     */
    @Output() deleteFile = new EventEmitter<string>();

    /** @internal */
    successIcon: IconData = {iconName: 'success-full', iconVersion: 'v3'};
    /** @internal */
    errorIcon: IconData = {iconName: 'error', iconVersion: 'v3'};

    get title(): string {
        return this._title;
    }
    private _title = 'Upload CSV';

    get error(): string {
        return this._error;
    }
    private _error: string;

    get helper(): string {
        return this._helper;
    }
    private _helper: string;

    get fileState(): FileDragAndDropState {
        return this._fileState;
    }
    private _fileState: FileDragAndDropState;

    get fileStateMessage(): string {
        switch (this.fileState.state) {
            case 'success':
                return this.fileState.message ?? 'Upload successfully';
            case 'error':
                return this.fileState.message ?? 'Unknown error occurs';
            case 'selected':
                return this.fileState.message ?? 'File selected';
            default:
                return '';
        }
    }

    constructor(private uniqueId: UniqueIdService) {
        this.buttonId = 'fu_' + this.uniqueId.getUniqueId();
    }
    /** @internal */
    handleSelectedFiles(files: FileList) {
        this.resetFileState();
        if (files.length === 1 && files.item(0).type == 'text/csv') {
            this.handleFiles.emit(files);
        } else {
            this.error = 'Please select one *.csv file.';
        }
    }
    /** @internal */
    onReplace() {
        this.replaceFile.emit(this.fileState.name);
        this.resetFileState();
    }
    /** @internal */
    onDelete() {
        this.deleteFile.emit(this.fileState.name);
        this.resetFileState();
    }

    private resetFileState() {
        this._fileState = {name: ''};
        this.error = '';
    }
}
