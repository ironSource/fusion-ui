import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FileCsvUploadComponent} from './file-csv-upload.component';
import {FileDragAndDropModule} from '@ironsource/fusion-ui/components/file-drag-and-drop';
import {ButtonModule} from '@ironsource/fusion-ui/components/button/v3';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip/v3';

@NgModule({
    declarations: [FileCsvUploadComponent],
    imports: [CommonModule, FileDragAndDropModule, ButtonModule, IconModule, TooltipModule],
    exports: [FileCsvUploadComponent]
})
export class FileCsvUploadModule {}
