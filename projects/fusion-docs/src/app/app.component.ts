import {Component, OnInit, OnDestroy} from '@angular/core';
import {ITooltipData, TooltipService} from '@ironsource/fusion-ui/components/tooltip';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

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

    onTagRemove($event): void {
        console.log('onTagRemove> ', $event);
    }
}
