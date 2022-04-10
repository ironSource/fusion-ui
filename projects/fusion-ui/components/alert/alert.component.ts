import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output, AfterViewInit} from '@angular/core';
import {StyleBase, StyleVersion} from '@ironsource/fusion-ui/components/style';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
    selector: 'fusion-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss', './alert.component-v2.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertComponent extends StyleBase implements AfterViewInit {
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

    closeIconName$: Observable<string | {iconName: string; iconVersion?: string}> = this.selectedVersion$.pipe(
        map(styleVersion => (styleVersion === StyleVersion.V2 ? 'close' : {iconName: 'close', iconVersion: 'v1'})),
        startWith({iconName: 'close', iconVersion: 'v1'})
    );

    onCloseClicked(isDontShowAgain = false): void {
        this.shown = false;
        this.closed.emit({dontShowAgain: isDontShowAgain});
    }

    onDontShowClicked($event): void {
        $event.preventDefault();
        this.onCloseClicked(true);
    }
}
