import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuItem} from '@ironsource/fusion-ui/components/menu/common/base';
import {HeaderContent, LayoutConfiguration} from '../layout.entities';
import {LayoutComponent} from '../layout.component';
import {ButtonModule} from '@ironsource/fusion-ui/components/button';
import {TeleportingDirective} from '@ironsource/fusion-ui/directives/teleporting';

@Component({
    selector: 'fusion-layout-story-wrapper',
    standalone: true,
    imports: [CommonModule, LayoutComponent, ButtonModule, TeleportingDirective],
    template: `
        <fusion-layout [configuration]="layoutConfiguration" [headerContent]="headerContent" (menuItemClick)="onMenuItemClick($event)">
            <fusion-button *fusionTeleporting="'#' + headerContent?.teleportElements[2].id">Button-3</fusion-button>
        </fusion-layout>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutStoryWrapperComponent {
    @Input() layoutConfiguration: LayoutConfiguration;
    @Input() headerContent: HeaderContent;

    onMenuItemClick(menuItem: MenuItem) {
        console.log('MnuItem Clicked: ', menuItem);
        this.headerContent = {...this.headerContent, title: menuItem.name};
    }
}
