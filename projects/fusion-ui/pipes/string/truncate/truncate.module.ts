import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TruncatePipe} from './truncate.pipe';

@NgModule({
    declarations: [TruncatePipe],
    providers: [TruncatePipe],
    exports: [TruncatePipe],
    imports: [CommonModule]
})
export class TruncateModule {}
