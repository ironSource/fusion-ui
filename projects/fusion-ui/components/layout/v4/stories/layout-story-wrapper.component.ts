import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuItem} from '@ironsource/fusion-ui/components/menu/common/base';
import {HeaderState, LayoutConfiguration} from '../layout.entities';
import {LayoutComponent} from '../layout.component';

@Component({
    selector: 'fusion-layout-story-wrapper',
    standalone: true,
    imports: [CommonModule, LayoutComponent],
    template: ` <fusion-layout [configuration]="layoutConfiguration" (menuItemClick)="onMenuItemClick($event)"></fusion-layout>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutStoryWrapperComponent {
    @Input() layoutConfiguration: LayoutConfiguration;

    onMenuItemClick(menuItem: MenuItem) {
        console.log('MnuItem Clicked: ', menuItem);
    }
}
