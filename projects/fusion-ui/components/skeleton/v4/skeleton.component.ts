import {ChangeDetectionStrategy, Component, HostBinding, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SkeletonShapeType} from './skeleton.component.entities';

@Component({
    selector: 'fusion-skeleton',
    standalone: true, // todo: just for storybook to work, will be fixed in storybook 8.5.0
    host: {class: 'fusion-v4'},
    imports: [CommonModule],
    template: `<div [ngClass]="class"></div>`,
    styleUrl: './skeleton.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkeletonComponent {
    @Input() shape: SkeletonShapeType = 'rectangle';
    @Input() size: number = 16;

    @HostBinding('style.--fu-skeleton-height') get height(): string {
        return `${this.size}px`;
    }

    get class(): string {
        return `fu-skeleton fu-shape-${this.shape}`;
    }
}
