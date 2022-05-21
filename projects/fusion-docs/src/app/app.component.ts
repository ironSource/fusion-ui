import {Component, OnInit, OnDestroy} from '@angular/core';
import {ITooltipData, TooltipService} from '@ironsource/fusion-ui/components/tooltip/common/base';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {FormControl} from '@angular/forms';

@Component({
    selector: 'fusion-docs',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
    tooltipData: ITooltipData = {};
    formControl = new FormControl();
    formControl2 = new FormControl({startDate: new Date(), endDate: new Date()});
    private onDestroy$ = new Subject();

    constructor(private tooltipService: TooltipService) {}

    ngOnInit() {
        this.tooltipService.tooltipData$.pipe(takeUntil(this.onDestroy$)).subscribe(tooltipData => (this.tooltipData = tooltipData));
    }

    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    chipChanged($event) {
        console.log($event);
    }

    removeChip($event) {
        console.log($event);
        this.formControl.reset();
    }

    chipChangedWithNoChildren($event) {
        console.log($event);
    }

    removeChipWithNoChildren($event) {
        console.log($event);
        this.formControl.reset();
    }
}
