import {ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2} from '@angular/core';

@Component({
    selector: 'fusion-flag',
    templateUrl: './flag.component.html',
    styleUrls: ['./flag.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlagComponent {
    @Input() set name(value: string) {
        this.onNameChanged(value);
    }

    flagName: string;

    constructor(public elementRef: ElementRef, public renderer: Renderer2) {}

    private onNameChanged(value: string): void {
        this.renderer.removeClass(this.elementRef.nativeElement, `is-flag-${this.flagName}`);
        this.flagName = value ? value.toLowerCase() : null;
        if (this.flagName) {
            this.renderer.addClass(this.elementRef.nativeElement, 'is-flag-' + this.flagName);
        }
    }
}
