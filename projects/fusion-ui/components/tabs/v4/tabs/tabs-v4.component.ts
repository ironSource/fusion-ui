import {
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    ElementRef,
    EventEmitter,
    HostBinding,
    Input,
    OnDestroy,
    OnInit,
    Output,
    QueryList,
    Renderer2
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TabV4SelectedEventData} from './tabs-v4.entities';
import {fromEvent, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {TabV4Component} from '../tab/tab-v4.component';

@Component({
    selector: 'fusion-tabs',
    standalone: true,
    imports: [CommonModule],
    host: {class: 'fusion-v4'},
    template: '<ng-content></ng-content>',
    styleUrls: ['./tabs-v4.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsV4Component implements OnInit, OnDestroy {
    @Input() variant: 'card' | 'page' = 'card';

    @HostBinding('class.fu-tabs-page') get isPage(): boolean {
        return this.variant === 'page';
    }

    @Output() selectedChange = new EventEmitter<TabV4SelectedEventData>();
    /** @internal */
    @ContentChildren(TabV4Component) tabList: QueryList<TabV4Component>;
    /** @internal */
    onDestroy$ = new Subject<void>();
    @Input() testId!: string;

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
        this.tabList.forEach((tab: TabV4Component, idx) => {
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
