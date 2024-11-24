import {Component, OnInit, OnDestroy} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
@Component({
    selector: 'fusion-intersection-docs',
    templateUrl: './intersection-docs.component.html',
    styleUrls: ['./intersection-docs.component.scss'],
    standalone: false
})
export class IntersectionDocsComponent implements OnInit, OnDestroy {
    rightMenu = [
        {
            title: 'Basic',
            items: [
                {
                    label: 'Intersection with Viewport',
                    scrollTo: '#typeBasic',
                    scrollOffset: 80
                },
                {
                    label: 'Custom Root and vertical margin',
                    scrollTo: '#customRoot',
                    scrollOffset: 80
                }
            ]
        },
        {
            title: 'Configuration',
            items: [
                {
                    label: 'Parameters',
                    scrollTo: '#params',
                    scrollOffset: 30
                },
                {
                    label: 'Events',
                    scrollTo: '#events',
                    scrollOffset: 30
                }
            ]
        }
    ];
    margin = new FormControl(40);
    isIntersecting = false;
    isIntersectingWithMargin = false;
    marginInt = 40;
    private onDestroy$ = new Subject();

    constructor() {}

    ngOnInit(): void {
        this.margin.valueChanges.pipe(takeUntil(this.onDestroy$)).subscribe(val => {
            this.marginInt = parseInt(val.toString(), 10);
        });
    }

    ngOnDestroy(): void {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    onIntersectionChange(entry: IntersectionObserverEntry): void {
        this.isIntersecting = entry.isIntersecting;
    }

    onIntersectionWithMarginChange(entry: IntersectionObserverEntry): void {
        this.isIntersectingWithMargin = entry.isIntersecting;
    }
}
