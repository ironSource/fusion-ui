import {AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IconData, IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {LayoutUser} from '@ironsource/fusion-ui/entities';
import {MenuItem} from '@ironsource/fusion-ui/components/menu/common/base';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip';

@Component({
    selector: 'fusion-navigation-pop-menu',
    standalone: true,
    imports: [CommonModule, IconModule, TooltipModule],
    templateUrl: './navigation-pop-menu.component.html',
    styleUrls: ['./navigation-pop-menu.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationPopMenuComponent implements AfterViewInit {
    @Input() layoutUser: LayoutUser;
    @Input() menuItems: MenuItem[];

    @Output() menuItemClicked = new EventEmitter<MenuItem>();

    /** @internal */
    userIcon: IconData = {iconName: 'userCircle', iconVersion: 'v4'};

    constructor(private element: ElementRef) {}

    ngAfterViewInit() {
        const popupHeight = this.element.nativeElement.querySelector('.fu-pop-menu')?.offsetHeight;
        if (!!popupHeight) {
            this.element.nativeElement.style.height = `${popupHeight}px`;
        }
    }

    onMenuItemClicked($event: MouseEvent, menuItem: MenuItem) {
        if ($event && $event.metaKey) {
            return;
        }
        if ($event && !menuItem.target) {
            $event.preventDefault();
            $event.stopPropagation();
            this.menuItemClicked.emit(menuItem);
        }
    }
}
