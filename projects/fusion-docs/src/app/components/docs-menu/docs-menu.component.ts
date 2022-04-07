import {ChangeDetectionStrategy, Component, HostBinding, HostListener, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {DocsMenuItem} from './docs-menu';
import {BehaviorSubject, combineLatest, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {StyleBase} from '@ironsource/fusion-ui';

@Component({
    selector: 'fusion-docs-menu',
    templateUrl: './docs-menu.component.html',
    styleUrls: ['./docs-menu.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocsMenuComponent extends StyleBase implements OnInit {
    @Input() set menuData(value: DocsMenuItem[]) {
        this.menuData$.next(value);
    }
    @HostBinding('style.width.px') width = 239; // default

    menuData$ = new BehaviorSubject<DocsMenuItem[]>([]);
    docsMenuItems$ = this.getMenuObservable$();

    private elMenuHolder: HTMLElement;

    ngOnInit() {
        this.elMenuHolder = document.querySelector('.is-right-side-menu-holder') as HTMLElement;
        this.calcWidth();
    }

    getMenuObservable$(): Observable<DocsMenuItem[]> {
        return combineLatest([this.menuData$, this.selectedVersion$]).pipe(
            map(([menuData]) => menuData || this.menuData$.getValue()),
            map((menuItems: DocsMenuItem[]) => {
                return menuItems.reduce((menuItemsOut: DocsMenuItem[], menuItem: DocsMenuItem) => {
                    const items = menuItem.items.filter(sub => {
                        return !Array.isArray(sub.styleVersions) || sub.styleVersions.includes(this.styleVersion);
                    });
                    if (items && items.length > 0) {
                        menuItemsOut.push({...menuItem, ...{items}});
                    }
                    return menuItemsOut;
                }, []);
            })
        );
    }

    private calcWidth(): void {
        if (this.elMenuHolder) {
            this.width = this.elMenuHolder.offsetWidth - 10;
        }
    }

    @HostListener('window:resize')
    onResize() {
        this.calcWidth();
    }
}
