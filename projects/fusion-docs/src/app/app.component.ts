import {Component, OnInit, OnDestroy} from '@angular/core';
import {ITooltipData, TooltipService} from '@ironsource/fusion-ui/components/tooltip';
import {takeUntil} from 'rxjs/operators';
import {BehaviorSubject, Subject} from 'rxjs';

@Component({
    selector: 'fusion-docs',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
    tooltipData: ITooltipData = {};
    private onDestroy$ = new Subject();

    constructor(private tooltipService: TooltipService) {}

    ngOnInit() {
        this.tooltipService.tooltipData$.pipe(takeUntil(this.onDestroy$)).subscribe(tooltipData => (this.tooltipData = tooltipData));
    }

    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    openModal$ = new BehaviorSubject<boolean>(false);
    closeModal$ = new BehaviorSubject<boolean>(null);
    onClickModalOpen() {
        this.openModal$.next(true);
    }

    onModalClosed($event) {
        console.log($event);
        this.openModal$.next(false);
    }

    saveClicked($event: any): void {
        console.log($event);
        console.log('modal save button clicked!');
    }
}
