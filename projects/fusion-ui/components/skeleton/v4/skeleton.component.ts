import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'fusion-skeleton',
    standalone: true,
    imports: [],
    templateUrl: './skeleton.component.html',
    styleUrl: './skeleton.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkeletonComponent {}
