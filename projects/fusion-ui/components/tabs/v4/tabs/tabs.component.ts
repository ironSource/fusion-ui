import {Component, ContentChildren, ElementRef, EventEmitter, OnDestroy, OnInit, Output, QueryList, Renderer2} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TabSelectedEventData} from '@ironsource/fusion-ui/components/tabs';
import {fromEvent, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {TabComponent} from '@ironsource/fusion-ui/components/tabs/v4';

@Component({
    selector: 'fusion-tabs',
    standalone: true,
    imports: [CommonModule],
    template: '<ng-content></ng-content>',
    styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit, OnDestroy {
    @Output() selectedChange = new EventEmitter<TabSelectedEventData>();
    /** @internal */
    @ContentChildren(TabComponent) tabList: QueryList<TabComponent>;
    /** @internal */
    onDestroy$ = new Subject<void>();

    constructor(private _element: ElementRef, private _renderer: Renderer2) {}

    ngOnInit(): void {
        fromEvent(this._element.nativeElement, 'click').pipe(takeUntil(this.onDestroy$)).subscribe(this.onClick.bind(this));
    }

    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    private onClick(event) {
        const clickedTabElement: HTMLElement = event.target.closest('fusion-tab');
        if (clickedTabElement) {
            const selectedTabIndex = this.setSelectedAndGetIndex(clickedTabElement);
            this.selectedChange.emit({index: selectedTabIndex, tabElement: clickedTabElement});
        }
    }

    private setSelectedAndGetIndex(tabElementToSelect: HTMLElement): number {
        let selectedTabIndex;
        this.tabList.forEach((tab: TabComponent, idx) => {
            if (tab.selected) {
                tab.selected = false;
            } else if (tab.nativeElement === tabElementToSelect) {
                tab.selected = true;
                selectedTabIndex = idx;
            }
        });
        return selectedTabIndex;
    }
}
