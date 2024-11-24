import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'fusion-form-card',
    host: {class: 'fusion-v4'},
    imports: [],
    templateUrl: './form-card.component.html',
    styleUrl: './form-card.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormCardComponent {}
