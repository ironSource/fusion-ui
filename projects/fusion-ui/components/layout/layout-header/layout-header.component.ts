import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {LayoutHeaderComponentConfiguration} from './layout-header-entity';
import {DynamicComponentConfiguration} from '@ironsource/fusion-ui/components/dynamic-components';
import {LayoutHeaderMenuConfiguration} from './layout-header-menu/layout-header-menu-entity';
import {SIDEBAR_TOGGLE_ICON, USER_ICON_NAME} from './layout-header.config';
import {SidebarMenuItem} from '@ironsource/fusion-ui/components/sidebar';
import {IconData} from '@ironsource/fusion-ui/components/icon';

@Component({
    selector: 'fusion-layout-header',
    templateUrl: './layout-header.component.html',
    styleUrls: ['./layout-header.component.scss', './layout-header-mobile.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutHeaderComponent {
    @Input() set configuration(value: LayoutHeaderComponentConfiguration) {
        this.setPageHeader(value);

        this.customHeader = this.getCustomConfiguration(value);

        this.serHeaderRightPanel(value);
    }
    @Input() set sidebarOpen(value: boolean) {
        this.sidebarOpenOpen = value;
        this.sidebarIconName = this.setSidebarIconName(value);
    }
    @Input() showPageHeaderContent: boolean;

    @Output() sidebarToggleIconClicked = new EventEmitter();
    @Output() layoutHeaderMenuItemClicked = new EventEmitter<SidebarMenuItem>();

    sidebarOpenOpen: boolean;
    sidebarIconName: IconData = SIDEBAR_TOGGLE_ICON.regular;

    titleText: string;
    titleContent: DynamicComponentConfiguration;
    customHeader: DynamicComponentConfiguration;

    hasMenu = false;
    userName: string;
    userIcon: IconData;

    headerMenuConfiguration: LayoutHeaderMenuConfiguration;
    menuOpen = false;

    /**
     * Toggle open / close header menu
     * - $event: HTMLEvent (if it occur by click or called from component method )
     */
    changeLayoutHeaderMenuState($event?) {
        if ($event) {
            // for onOutsideLayoutHeaderMenuClick suppress
            $event.stopPropagation();
        }
        this.menuOpen = !this.menuOpen;
    }

    /**
     * On outside header menu click, if it was open - close it
     */
    onOutsideLayoutHeaderMenuClick() {
        if (this.menuOpen) {
            this.changeLayoutHeaderMenuState();
        }
    }

    /**
     * Emitted from header menu. Occur by menu item in header menu clicked
     * -param menuItem
     */
    onLayoutHeaderMenuItemClicked(menuItem: SidebarMenuItem) {
        this.layoutHeaderMenuItemClicked.emit(menuItem);
        // close menu
        this.onOutsideLayoutHeaderMenuClick();
    }

    private setPageHeader(value: LayoutHeaderComponentConfiguration) {
        this.titleText = value?.title?.text;
        // relevant only for type - page
        this.titleContent = value?.title?.type === 'page' ? value?.title?.content : null;
    }

    private serHeaderRightPanel(value: LayoutHeaderComponentConfiguration) {
        this.userName = value?.user?.name;
        this.userIcon = value?.user?.icon ?? USER_ICON_NAME;

        this.hasMenu = !!value?.user?.name || !!value?.user?.name || !!value?.menuItems;
        this.headerMenuConfiguration = {
            user: value?.user,
            menuItems: value?.menuItems
        };
    }

    /**
     * Get sidebar toggle icon name by sidebar state from configuration
     * - isOpen: Sidebar state Open
     * *private
     */
    private setSidebarIconName(isOpen: boolean): IconData {
        return isOpen ? SIDEBAR_TOGGLE_ICON.regular : SIDEBAR_TOGGLE_ICON.closed;
    }

    /**
     * Check and return custom header component / element / html snippet
     * - config
     * *private
     */
    private getCustomConfiguration(config: LayoutHeaderComponentConfiguration): DynamicComponentConfiguration {
        return config?.content?.component || config?.content?.element || config?.content?.htmlSnippet ? config.content : undefined;
    }
}
