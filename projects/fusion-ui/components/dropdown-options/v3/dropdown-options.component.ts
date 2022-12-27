import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
    selector: 'fusion-dropdown-options',
    templateUrl: './dropdown-options.component.html',
    styleUrls: ['./dropdown-options.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [CommonModule]
})
export class DropdownOptionsComponent {}
