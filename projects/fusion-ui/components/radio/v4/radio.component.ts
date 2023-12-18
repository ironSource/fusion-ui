import {ChangeDetectionStrategy, Component, forwardRef, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RadioBaseComponent} from './radio.base.component';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip';

@Component({
    selector: 'fusion-radio',
    standalone: true,
    imports: [CommonModule, TooltipModule],
    templateUrl: './radio.component.html',
    styleUrls: ['./radio.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'fusion-v4'},
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => RadioComponent),
            multi: true
        }
    ]
})
export class RadioComponent extends RadioBaseComponent {}
