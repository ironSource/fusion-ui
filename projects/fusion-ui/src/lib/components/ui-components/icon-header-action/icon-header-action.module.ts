import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IconHeaderActionComponent} from './icon-header-action.component';
import {IconModule} from '../icon/icon.module';

@NgModule({
    imports: [CommonModule, IconModule],
    declarations: [IconHeaderActionComponent],
    exports: [IconHeaderActionComponent]
})
export class IconHeaderActionModule {}
