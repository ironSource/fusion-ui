import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotAvailablePipe} from './not-available.pipe';

@NgModule({
    declarations: [NotAvailablePipe],
    exports: [NotAvailablePipe],
    imports: [CommonModule]
})
export class NotAvailableModule {}
