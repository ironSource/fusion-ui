import {ChangeDetectionStrategy, Component, ElementRef, Input, OnDestroy, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BehaviorSubject, from, Subject} from 'rxjs';
import {debounceTime, filter, switchMap, takeUntil, tap} from 'rxjs/operators';
import {computePosition, flip, shift} from '@floating-ui/dom';
import {RepositionDirective} from '@ironsource/fusion-ui/directives/reposition';
import {TeleportingModule} from '@ironsource/fusion-ui/directives/teleporting';
import {DroppedListComponent, DroppedListOption} from '@ironsource/fusion-ui/components/dropped-list/v4';

@Component({
    selector: 'fusion-text-with-dropped-list',
    standalone: true, // todo: just for storybook to work, will be fixed in storybook 8.5.0
    host: {
        class: 'fusion-v4',
        '[class.fu-disabled]': 'disabled',
        '[class.fu-small]': 'size === "small"',
        '(mouseenter)': 'showedList$.next(true)',
        '(mouseleave)': 'showedList$.next(false)'
    },
    imports: [CommonModule, TeleportingModule, RepositionDirective, DroppedListComponent],
    templateUrl: './text-with-dropped-list.component.html',
    styleUrl: './text-with-dropped-list.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextWithDroppedListComponent implements OnInit, OnDestroy {
    @Input() size: 'small' | 'medium' = 'medium';
    @Input() text: string;
    @Input() disabled = false;
    @Input() list: DroppedListOption[] = [];

    /** @ignore */
    showedList$ = new BehaviorSubject<boolean>(false);

    #onDestroy$ = new Subject<void>();
    #hostElement: HTMLElement = this.hostElementRef.nativeElement;
    #textLabel: HTMLElement;
    #droppedList: HTMLElement;

    constructor(private hostElementRef: ElementRef) {}

    ngOnInit() {
        this.showedList$
            .asObservable()
            .pipe(
                takeUntil(this.#onDestroy$),
                filter(isShow => isShow && !this.list.length),
                debounceTime(0),
                tap(() => {
                    this.#textLabel = <HTMLElement>this.#hostElement.querySelector(`.fu-text`);
                    this.#droppedList = <HTMLElement>this.#hostElement.querySelector(`fusion-dropped-list`);
                }),
                switchMap(() =>
                    from(
                        computePosition(this.#textLabel, this.#droppedList, {
                            placement: 'bottom',
                            middleware: [flip(), shift({padding: 5})]
                        })
                    )
                )
            )
            .subscribe(({x, y}) => {
                this.#droppedList.style.left = x + 'px';
                this.#droppedList.style.top = y + 'px';
            });
    }

    ngOnDestroy(): void {
        this.#onDestroy$.next();
        this.#onDestroy$.complete();
    }
}
