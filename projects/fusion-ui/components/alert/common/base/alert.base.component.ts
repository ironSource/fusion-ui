import {Directive, EventEmitter, Input, Output} from '@angular/core';

@Directive()
export abstract class AlertBaseComponent {
    @Input() type = 'info';
    @Input() mode = 'basic';
    @Input() shown = true;
    @Input() showCloseButton = true;
    @Input() showDoNotShowAgainButton: boolean;
    @Output() closed = new EventEmitter<{dontShowAgain: boolean}>();

    get alertIcon(): string {
        return this.type.toLowerCase() !== 'error' ? this.type.toLowerCase() : 'alert-error';
    }

    get alertCssClasses(): string[] {
        return [this.mode.toLowerCase(), this.type.toLowerCase(), this.showCloseButton && 'has-close-button'].filter(Boolean);
    }

    /** @internal */
    onCloseClicked(isDontShowAgain = false): void {
        this.shown = false;
        this.closed.emit({dontShowAgain: isDontShowAgain});
    }

    /** @internal */
    onDontShowClicked($event): void {
        $event.preventDefault();
        this.onCloseClicked(true);
    }
}
