import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {defaultStrokeWidth} from './loader.configuration';

@Component({
    selector: 'fusion-loader',
    standalone: true, // todo: just for storybook to work, will be fixed in storybook 8.5.0
    host: {class: 'fusion-v4'},
    imports: [CommonModule],
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoaderComponent {
    @Input() set strokeWidth(value: number) {
        this._strokeWidth = value;
    }

    get strokeWidth(): number {
        return this._strokeWidth ?? defaultStrokeWidth;
    }

    private _strokeWidth: number;
}
