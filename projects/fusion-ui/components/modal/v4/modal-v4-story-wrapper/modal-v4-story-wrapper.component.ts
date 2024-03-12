import {AfterViewInit, ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonComponent} from '@ironsource/fusion-ui/components/button/v4';
import {ModalV4Component} from '../modal-v4.component';
import {TeleportingDirective} from '@ironsource/fusion-ui/directives/teleporting';
import {DialogTestIdModifiers} from '@ironsource/fusion-ui/entities';
import {getTestId} from '@ironsource/fusion-ui/utils/utilsForTest';
import {defaultTestId} from 'projects/E2E/tests/components/dialog/consts';

@Component({
    selector: 'fusion-modal-story-wrapper',
    standalone: true,
    imports: [CommonModule, ButtonComponent, ModalV4Component, TeleportingDirective],
    templateUrl: './modal-v4-story-wrapper.component.html',
    styleUrls: ['./modal-v4-story-wrapper.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalV4StoryWrapperComponent implements AfterViewInit {
    @Input() mode: string;

    private defaultDialogConfig = {
        title: 'Title',
        description: '',
        showHeader: true,
        content: 'This is a dialog that demonstrates the usage of the DialogTitle and DialogActions components!',
        primaryButtonLabel: 'Ok',
        primaryButtonColor: 'primary',
        secondaryButtonLabel: 'Cancel',
        size: 'small',
        customContent: ``
    };

    dialogConfig = {...this.defaultDialogConfig};
    modalSown = false;
    teleportTarget = '#storybook-root';
    @Input() testId: string = defaultTestId;
    modalButtonTestId = getTestId(this.testId, DialogTestIdModifiers.WRAPPER);

    ngAfterViewInit() {
        this.teleportTarget = !!document.getElementById('storybook-root')?.attributes['hidden'] ? '#storybook-docs' : '#storybook-root';
    }

    openModal(mode) {
        switch (mode) {
            case 'small':
                this.dialogConfig = {...this.defaultDialogConfig, size: 'small'};
                break;
            case 'medium':
                this.dialogConfig.size = 'large';
                this.dialogConfig = {...this.defaultDialogConfig, size: 'medium'};
                break;
            case 'large':
                this.dialogConfig.size = 'large';
                this.dialogConfig = {...this.defaultDialogConfig, size: 'large'};
                break;
            case 'delete':
                this.dialogConfig = {
                    ...this.defaultDialogConfig,
                    title: 'Delete this item?',
                    primaryButtonLabel: 'Delete',
                    primaryButtonColor: 'danger',
                    content: '',
                    customContent: `<div style="display: flex; flex-direction: column; gap: 8px;">Are you sure you want to delete the following item?</div><div><b>{item_name}</b></div>`
                };
                break;
            case 'subTitle':
                this.dialogConfig = {...this.defaultDialogConfig, description: 'Description'};
                break;
            case 'noHeader':
                this.dialogConfig = {...this.defaultDialogConfig, showHeader: false};
                break;
            default:
                this.dialogConfig = {...this.defaultDialogConfig};
                break;
        }

        this.modalSown = !this.modalSown;
    }

    closeModal() {
        console.log('close modal');
        this.modalSown = false;
    }
}
