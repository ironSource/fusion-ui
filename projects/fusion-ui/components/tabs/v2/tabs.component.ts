import {ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TabsConfiguration} from './tabs.entities';
import {TabConfiguration} from './tab/tab.entities';
import {Observable} from 'rxjs';
import {PopupComponentContent, PopupEntity} from '@ironsource/fusion-ui/components/popup/common/entities';
import {PopupService} from '@ironsource/fusion-ui/components/popup/common/services';

@Component({
    selector: 'fusion-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [PopupService],
    standalone: false
})
export class TabsComponent implements OnInit {
    @Input() set configuration(value: TabsConfiguration) {
        this.tabs = value?.tabs ?? [];
        this.iconPositionUp = value?.verticalDisplay;
        if (value?.tabWidth) {
            this.tabFlex = `0 0 ${value?.tabWidth}px`;
        }
    }
    @Input() set selected(value: TabConfiguration) {
        this.selectedTab = value;
    }

    @Output() selectedChange = new EventEmitter<TabConfiguration>();

    tabs: TabConfiguration[] = [];
    iconPositionUp = false;
    tabFlex: string;

    selectedTab: TabConfiguration;

    popupData$: Observable<PopupEntity>;

    constructor(private popupService: PopupService) {}

    ngOnInit(): void {
        this.popupData$ = this.popupService.popupData$.asObservable();
    }

    onTabClicked(tab: TabConfiguration) {
        if (!tab?.disabled) {
            this.selectedTab = tab;
            this.selectedChange.emit(this.selectedTab);
        }
    }

    isSelected(tab: TabConfiguration): boolean {
        if (!!this.selectedTab) {
            if (tab.text) {
                return tab.text === this.selectedTab.text;
            } else if (tab.icon) {
                return tab.icon === this.selectedTab.icon;
            }
        }
        return false;
    }

    onPopupShow(data: {content: PopupComponentContent; target: ElementRef}) {
        const popupData: PopupEntity = {
            backgroundColor: 'transparent',
            component: data.content,
            hostElement: data.target
        };
        this.popupService.showPopUp(popupData);
    }

    trackByTextOrIconName(index, item: TabConfiguration) {
        if (item.text) {
            return item.text;
        } else if (item.icon) {
            return item.icon;
        } else {
            return index;
        }
    }
}
