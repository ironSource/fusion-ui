import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BehaviorSubject} from 'rxjs';
import {computePosition, flip, shift} from '@floating-ui/dom';
import {RepositionDirective} from '@ironsource/fusion-ui/directives/reposition';
import {UniqueIdService} from '@ironsource/fusion-ui/services/unique-id';
import {TeleportingModule} from '@ironsource/fusion-ui/directives/teleporting';
import {DroppedListComponent, DroppedListOption} from '@ironsource/fusion-ui/components/dropped-list/v4';

@Component({
    selector: 'fusion-text-with-dropped-list',
    standalone: true,
    host: {
        class: 'fusion-v4',
        '[class.fu-disabled]': 'disabled',
        '[class.fu-small]': 'size === "small"',
        '(mouseenter)': 'moseEnter()',
        '(mouseleave)': 'mouseLeave()'
    },
    imports: [CommonModule, TeleportingModule, RepositionDirective, DroppedListComponent],
    templateUrl: './text-with-dropped-list.component.html',
    styleUrl: './text-with-dropped-list.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextWithDroppedListComponent {
    @Input() size: 'small' | 'medium' = 'medium';
    @Input() text: string;
    @Input() disabled = false;
    @Input() list: DroppedListOption[] = [];

    #uniqueIdService: UniqueIdService = inject(UniqueIdService);

    /** @ignore */
    id = 'fu_' + this.#uniqueIdService.getUniqueId().toString();
    /** @ignore */
    showedList$ = new BehaviorSubject<boolean>(false);

    /** @ignore */
    moseEnter() {
        if (this.disabled) {
            return;
        }

        this.showedList$.next(true);

        setTimeout(() => {
            const texEl = <HTMLElement>document.querySelector(`#${this.id}`);
            const popListEl = <HTMLElement>document.querySelector(`#for_${this.id}`);

            computePosition(texEl, popListEl, {
                placement: 'bottom',
                middleware: [flip(), shift({padding: 5})]
            }).then(({x, y}) => {
                popListEl.style.left = x + 'px';
                popListEl.style.top = y + 'px';
            });
        });
    }

    /** @ignore */
    mouseLeave() {
        this.showedList$.next(false);
    }
}
