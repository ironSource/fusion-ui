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
    formControl1 = new FormControl({id: 1, displayText: 'Option 1'});
    formControl2 = new FormControl({startDate: new Date(), endDate: new Date()});
    optionsFilter = [
        {id: 1, displayText: 'Option 1'},
        {id: 2, displayText: 'Option 2'},
        {id: 3, displayText: 'Option 3'},
        {id: 4, displayText: 'Option 4'},
        {id: 5, displayText: 'Option 5'},
        {id: 6, displayText: 'Option 6'},
        {id: 7, displayText: 'Option 7'},
        {id: 8, displayText: 'Option 8'},
        {id: 9, displayText: 'Option 9'},
        {id: 10, displayText: 'Option 10'}
    ];
    private onDestroy$ = new Subject();
    constructor(private tooltipService: TooltipService) {}

    option = [
        {displayText: 'Mario Speedwagon'},
        {displayText: 'Anna Sthesia'},
        {displayText: 'Petey Cruiser'},
        {displayText: 'Paul Molive'},
        {displayText: 'Anna Mull'},
        {displayText: 'Gail Forcewind'},
        {displayText: 'Paige Turner'},
        {displayText: 'Bob Frapples'},
        {displayText: 'Walter Melon'},
        {displayText: 'Nick R. Bocker'},
        {displayText: 'Barb Ackue'},
        {displayText: 'Buck Kinnear'},
        {displayText: 'Greta Life'},
        {displayText: 'Ira Membrit'},
        {displayText: 'Shonda Leer'},
        {displayText: 'Brock Lee'},
        {displayText: 'Maya Didas'},
        {displayText: 'Rick O`Shea'},
        {displayText: 'Pete Sariya'},
        {displayText: 'Monty Carlo'}
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
