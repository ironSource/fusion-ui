import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonComponent} from '@ironsource/fusion-ui/components/button/v4';
import {TeleportingModule} from '@ironsource/fusion-ui/directives/teleporting';
import {SnackbarComponent, SnackbarLocation, SnackbarType} from '../';
import {SnackbarService} from '../snackbar.service';

@Component({
    selector: 'fusion-snackbar-story-wrapper',
    standalone: true,
    imports: [CommonModule, TeleportingModule, ButtonComponent, SnackbarComponent],
    providers: [SnackbarService],
    templateUrl: './snackbar-story-wrapper.component.html',
    styleUrls: ['./snackbar-story-wrapper.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SnackbarStoryWrapperComponent {
    @Input() title: string;
    @Input() message: string;
    @Input() type: SnackbarType = 'default';
    @Input() location: SnackbarLocation = 'top-right';
    @Input() duration: number = 0;
    @Input() actionButtons: any[] = [];

    @Input() byStatuses: boolean = false;
    @Input() byPosition: boolean = false;

    constructor(private snackbarService: SnackbarService) {}

    private snackCount = 0;

    /** @internal */
    showSnack() {
        this.snackbarService.show({
            title: this.title + ' ' + this.snackCount++,
            message: this.message,
            type: this.type,
            location: this.location,
            duration: this.duration,
            actionButtons: this.actionButtons
        });
    }

    /** @internal */
    showSnackByType(type: SnackbarType) {
        this.snackbarService.show({
            title: this.title,
            message: this.message,
            type: type,
            location: this.location,
            duration: this.duration
        });
    }

    /** @internal */
    showSnackByPosition(position: SnackbarLocation) {
        this.snackbarService.show({
            title: this.title + ' ' + this.snackCount++,
            message: this.message,
            type: this.type,
            location: position,
            duration: this.duration
        });
    }

    protected readonly Array = Array;
}
