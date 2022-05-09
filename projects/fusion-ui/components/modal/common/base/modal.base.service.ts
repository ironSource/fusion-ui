import {Injectable} from '@angular/core';
import {ModalBaseComponent} from './modal.base.component';
import {isFunction} from '@ironsource/fusion-ui/utils';

@Injectable({
    providedIn: 'root'
})
export class ModalService {
    modals: {[id: string]: ModalBaseComponent} = {};

    add(modal: ModalBaseComponent) {
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
