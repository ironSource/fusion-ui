import {Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, Renderer2} from '@angular/core';
import {fromEvent, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {TabSelectedEventData} from '../tabs.entities';

@Component({
    selector: 'fusion-tabs',
    template: '<ng-content></ng-content>',
    styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit, OnDestroy {
    @Output() selectedChange = new EventEmitter<TabSelectedEventData>();

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
            this._element.nativeElement.querySelectorAll('fusion-tab[selected]').forEach(el => {
                this._renderer.removeAttribute(el, 'selected');
            });
            this._renderer.setAttribute(clickedTabElement, 'selected', '');

            const selectedTabIndex = this.getTabElementIndex(clickedTabElement);

            this.selectedChange.emit({index: selectedTabIndex, tabElement: clickedTabElement});
        }
    }

    private getTabElementIndex(tabElement: HTMLElement): number {
        return [...this._element.nativeElement.querySelectorAll('fusion-tab')].findIndex(el => el === tabElement);
    }
}
