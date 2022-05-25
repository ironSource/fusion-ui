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

    option = [
        {id: 1, title: 'Mario Speedwagon'},
        {id: 2, title: 'Petey Cruiser'},
        {id: 3, title: 'Anna Sthesia'},
        {id: 4, title: 'Paul Molive'},
        {id: 5, title: 'Anna Mull'},
        {id: 6, title: 'Gail Forcewind'},
        {id: 7, title: 'Paige Turner'},
        {id: 8, title: 'Bob Frapples'},
        {id: 9, title: 'Walter Melon'},
        {id: 10, title: 'Nick R. Bocker'},
        {id: 11, title: 'Barb Ackue'},
        {id: 12, title: 'Buck Kinnear'},
        {id: 13, title: 'Greta Life'},
        {id: 14, title: 'Ira Membrit'},
        {id: 15, title: 'Shonda Leer'},
        {id: 16, title: 'Brock Lee'},
        {id: 17, title: 'Maya Didas'},
        {id: 18, title: 'Rick O`Shea'},
        {id: 19, title: 'Pete Sariya'},
        {id: 20, title: 'Monty Carlo'}
    ];

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
