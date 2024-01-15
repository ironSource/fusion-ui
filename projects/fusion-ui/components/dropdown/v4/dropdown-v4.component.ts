import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
    selector: 'fusion-dropdown-v4',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './dropdown-v4.component.html',
    styleUrls: ['./dropdown-v4.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownV4Component implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
