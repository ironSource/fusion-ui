import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output, Injector, AfterViewInit} from '@angular/core';
import {StyleBase} from '@ironsource/fusion-ui/components/style';
import {ALERT_THEME_TOKEN} from './alert-theme';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {StyleVersion} from '@ironsource/fusion-ui/services/version';
import {IconData} from '@ironsource/fusion-ui/components/icon';

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

    closeIconName$: Observable<string | IconData> = this.selectedVersion$.pipe(
        map(styleVersion =>
            styleVersion === StyleVersion.V2 ? {iconName: 'close', iconVersion: 'v2'} : {iconName: 'close', iconVersion: 'v1'}
        ),
        startWith({iconName: 'close', iconVersion: 'v1'})
    );

    constructor(injector: Injector) {
        super(injector, ALERT_THEME_TOKEN);
    }

    onCloseClicked(isDontShowAgain = false): void {
        this.shown = false;
        this.closed.emit({dontShowAgain: isDontShowAgain});
    }

    onDontShowClicked($event): void {
        $event.preventDefault();
        this.onCloseClicked(true);
    }

    ngAfterViewInit() {
        super.ngAfterViewInit();
    }
}
