import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FilterByFieldPipe} from './filter-by-field.pipe';

@NgModule({
    declarations: [FilterByFieldPipe],
    exports: [FilterByFieldPipe],
    providers: [FilterByFieldPipe],
    imports: [CommonModule]
})
export class FilterByFieldModule {}
