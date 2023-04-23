import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IconData, IconModule} from '@ironsource/fusion-ui/components/icon/v1';

@Component({
    selector: 'fusion-floating-toolbar',
    standalone: true,
    imports: [CommonModule, IconModule],
    templateUrl: './floating-toolbar.component.html',
    styleUrls: ['./floating-toolbar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FloatingToolbarComponent implements OnInit {
    @Input() counter: number;
    @Input() label: string;

    closeIcon: IconData = {iconName: 'close', iconVersion: 'v3'};

    constructor() {}

    ngOnInit(): void {}
}
