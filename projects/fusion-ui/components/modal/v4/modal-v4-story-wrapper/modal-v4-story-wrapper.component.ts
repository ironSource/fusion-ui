import {AfterViewInit, ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonComponent} from '@ironsource/fusion-ui/components/button/v4';
import {ModalV4Component} from '../modal-v4.component';
import {TeleportingDirective} from '@ironsource/fusion-ui/directives/teleporting';

@Component({
    selector: 'fusion-modal-story-wrapper',
    standalone: true,
    imports: [CommonModule, ButtonComponent, ModalV4Component, TeleportingDirective],
    templateUrl: './modal-v4-story-wrapper.component.html',
    styleUrls: ['./modal-v4-story-wrapper.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalV4StoryWrapperComponent implements AfterViewInit {
    modalSown = false;
    teleportTarget = '#storybook-root';

    ngAfterViewInit() {
        this.teleportTarget = !!document.getElementById('storybook-root').attributes['hidden'] ? '#storybook-docs' : '#storybook-root';
    }

    openModal() {
        this.modalSown = !this.modalSown;
    }

    closeModal() {
        console.log('close modal');
        this.modalSown = false;
    }
}
