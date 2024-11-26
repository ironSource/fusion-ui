import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'fusion-form-card',
    standalone: true, // todo: just for storybook to work, will be fixed in storybook 8.5.0
    host: {class: 'fusion-v4'},
    imports: [],
    templateUrl: './form-card.component.html',
    styleUrl: './form-card.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormCardComponent {}
