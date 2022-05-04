import {Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, Renderer2} from '@angular/core';
import {fromEvent, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {TabSelectedEventData} from '@ironsource/fusion-ui/components/tabs/v3/tab-group.entities';

@Component({
    selector: 'fusion-tab-group',
    template: '<ng-content></ng-content>',
    styleUrls: ['./tab-group.component.scss']
})
export class TabGroupComponent implements OnInit, OnDestroy {
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
        const clickedTab = event.target.closest('fusion-tab');
        if (clickedTab) {
            this._element.nativeElement.querySelectorAll('fusion-tab[selected]').forEach(el => {
                this._renderer.removeAttribute(el, 'selected');
            });
            this._renderer.setAttribute(clickedTab, 'selected', '');

            this.selectedChange.emit({index: 2, tabElement: clickedTab});
        }
    }
}
