import {Injectable} from '@angular/core';
import {ModalComponent} from './modal/modal.component';
import {isFunction} from '../../../utils';

@Injectable({
    providedIn: 'root'
})
export class ModalService {
    private modals: {[id: string]: ModalComponent} = {};

    add(modal: ModalComponent) {
        // add modal to array of active modals
        this.modals[modal.id] = modal;
    }

    remove(id: string) {
        // remove modal from array of active modals
        delete this.modals[id];
    }

    open(id: string) {
        if (this.modals[id] && isFunction(this.modals[id].open)) {
            this.modals[id].open();
        }
    }

    close(id: string, {emitEvent = true} = {}) {
        if (this.modals[id] && isFunction(this.modals[id].close)) {
            this.modals[id].close(emitEvent);
        }
    }
}
