import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuDropComponent} from '@ironsource/fusion-ui/components/menu-drop';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';

@Component({
    selector: 'fusion-menu-drop',
    standalone: true,
    host: {class: 'fusion-v4'},
    imports: [CommonModule, IconModule],
    templateUrl: './menu-drop.component.html',
    styleUrls: ['./menu-drop.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuDropV4Component extends MenuDropComponent {}
