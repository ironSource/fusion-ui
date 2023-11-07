import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {borderRadiusData} from './borderRadiusData';

@Component({
    selector: 'fusion-border-radius',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './border-radius.component.html',
    styleUrls: ['./border-radius.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BorderRadiusComponent {
    borderRadiusData = borderRadiusData;
}
