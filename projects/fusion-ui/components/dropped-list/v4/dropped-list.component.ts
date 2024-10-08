import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {DroppedListOption} from './dropped-list.entities';
import {FlagComponent} from '@ironsource/fusion-ui/components/flag/v4';
import {TooltipDirective} from '@ironsource/fusion-ui/components/tooltip/v4';
import {ScrollingModule} from '@angular/cdk/scrolling';

@Component({
    selector: 'fusion-dropped-list',
    standalone: true,
    host: {class: 'fusion-v4'},
    imports: [FlagComponent, TooltipDirective, ScrollingModule],
    templateUrl: './dropped-list.component.html',
    styleUrl: './dropped-list.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DroppedListComponent {
    @Input() list: DroppedListOption[] = [];
}
