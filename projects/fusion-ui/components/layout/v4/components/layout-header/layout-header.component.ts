import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
    selector: 'fusion-layout-header',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './layout-header.component.html',
    styleUrls: ['./layout-header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutHeaderComponent implements OnInit {
    @Input() set title(value: string) {
        this._title = value;
    }
    get title(): string {
        return this._title;
    }
    private _title: string;

    constructor() {}

    ngOnInit(): void {}
}
