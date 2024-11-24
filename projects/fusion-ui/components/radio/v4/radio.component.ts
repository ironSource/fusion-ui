import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip';
import {RadioBaseComponent} from './radio.base.component';

@Component({
    selector: 'fusion-radio',
    imports: [CommonModule, TooltipModule],
    templateUrl: './radio.component.html',
    styleUrls: ['./radio.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'fusion-v4'}
})
export class RadioComponent extends RadioBaseComponent {}
