import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExampleBlockComponent} from './example-block.component';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {ExampleBlockDirective} from './example-block.directive';

@NgModule({
    declarations: [ExampleBlockComponent, ExampleBlockDirective],
    exports: [ExampleBlockComponent, ExampleBlockDirective],
    imports: [CommonModule, IconModule]
})
export class ExampleBlockModule {}
