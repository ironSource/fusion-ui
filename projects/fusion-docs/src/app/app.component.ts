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
    private onDestroy$ = new Subject();
    options = [
        {id: 1, title: 'First'},
        {id: 2, title: 'Second'},
        {id: 3, title: 'Third'}
    ];
    formControl = new FormControl({id: 1, title: 'first'});
    constructor(private tooltipService: TooltipService) {}

    ngOnInit() {
        this.tooltipService.tooltipData$.pipe(takeUntil(this.onDestroy$)).subscribe(tooltipData => (this.tooltipData = tooltipData));
    }

    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }
}
