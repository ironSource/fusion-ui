import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DynamicComponentsModule} from '@ironsource/fusion-ui/components/dynamic-components/v1';
import {HeaderContent} from '../../layout.entities';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';

@Component({
    selector: 'fusion-layout-header',
    standalone: true,
    imports: [CommonModule, DynamicComponentsModule, IconModule],
    templateUrl: './layout-header.component.html',
    styleUrls: ['./layout-header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutHeaderComponent {
    @Input() set headerContent(value: HeaderContent) {
        this._headerContent = value;
    }
    get headerContent(): HeaderContent {
        return this._headerContent;
    }
    @Output() backButtonClicked = new EventEmitter();
    private _headerContent: HeaderContent;
}
