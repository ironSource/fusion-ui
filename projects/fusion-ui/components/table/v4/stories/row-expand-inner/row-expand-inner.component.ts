import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
    selector: 'fusion-row-expand-inner',
    standalone: true,
    imports: [],
    templateUrl: './row-expand-inner.component.html',
    styleUrl: './row-expand-inner.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RowExpandInnerComponent {
    @Input() title: string;
    @Input() subtitle: string;
    @Input() benefits: string[];
}
