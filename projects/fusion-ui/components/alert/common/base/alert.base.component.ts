import {Directive, EventEmitter, Input, Output} from '@angular/core';

@Directive()
export class AlertBaseComponent {
    @Input() type = 'info';
    @Input() mode = 'basic';
    @Input() shown = true;
    @Input() showCloseButton = true;
    @Input() showDoNotShowAgainButton: boolean;
    @Output() closed = new EventEmitter();

    get alertIcon(): string {
        return this.type.toLowerCase() !== 'error' ? this.type.toLowerCase() : 'alert-error';
    }

    get alertCssClasses(): string[] {
        return [this.mode.toLowerCase(), this.type.toLowerCase(), this.showCloseButton && 'has-close-button'].filter(Boolean);
    }

    onCloseClicked(isDontShowAgain = false): void {
        this.shown = false;
        this.closed.emit({dontShowAgain: isDontShowAgain});
    }

    onDontShowClicked($event): void {
        $event.preventDefault();
        this.onCloseClicked(true);
    }
}
