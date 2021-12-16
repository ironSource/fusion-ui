import {Injectable} from '@angular/core';
import {PopupEntity} from './popup.entity';
import {BehaviorSubject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PopupService {
    public popupData$ = new BehaviorSubject<PopupEntity>(null);

    public showPopUp(popupData: PopupEntity): void {
        this.popupData$.next(popupData);
    }

    public closePopUp(): void {
        this.popupData$.next(null);
    }
}
