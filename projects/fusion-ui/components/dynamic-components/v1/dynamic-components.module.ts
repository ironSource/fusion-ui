import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DynamicComponentsComponent} from './dynamic-components.component';

@NgModule({
    declarations: [DynamicComponentsComponent],
    exports: [DynamicComponentsComponent],
    imports: [CommonModule]
})
export class DynamicComponentsModule {}
