import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {BehaviorSubject, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {ChartLabel} from '@ironsource/fusion-ui';

@Component({
    selector: 'fusion-click-outside-docs',
    templateUrl: './click-outside-docs.component.html',
    styleUrls: ['./click-outside-docs.component.scss']
})
export class ClickOutsideDocsComponent implements OnInit, OnDestroy {
    rightMenu = [
        {
            title: 'Basic',
            items: [
                {
                    label: 'Basic',
                    scrollTo: '#typeBasic',
                    scrollOffset: 80
                }
            ]
        }
    ];
    counter = 0;

    onDestroy$ = new Subject();
    listenerState$ = new BehaviorSubject<boolean>(true);
    toggleFormControl = new FormControl(true);
    toggleLabel = 'Enable ClickOutside Event Listener';

    constructor() {}

    ngOnInit() {
        this.toggleFormControl.valueChanges.pipe(takeUntil(this.onDestroy$)).subscribe(val => {
            this.listenerState$.next(val);
            this.toggleLabel = `${val ? 'Enable' : 'Disable'}Disable ClickOutside Event Listener`;
        });
    }

    ngOnDestroy(): void {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    onClickOutside(event) {
        console.log(event);
        this.counter++;
    }
}
