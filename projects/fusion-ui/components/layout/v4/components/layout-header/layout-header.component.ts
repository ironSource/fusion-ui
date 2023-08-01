import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DynamicComponentsModule} from '@ironsource/fusion-ui/components/dynamic-components/v1';
import {HeaderContent, TeleportWrapperElement} from '../../layout.entities';
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
    @Input() set teleportElements(value: TeleportWrapperElement[]) {
        this._teleportElements = value;
    }
    get teleportElements(): TeleportWrapperElement[] {
        return this._teleportElements ?? [];
    }
    @Output() backButtonClicked = new EventEmitter();

    get hasTeleportAlignRight(): boolean {
        return this.teleportElements.some(element => element.isOnRight);
    }

    private _headerContent: HeaderContent;
    private _teleportElements: TeleportWrapperElement[];
}
