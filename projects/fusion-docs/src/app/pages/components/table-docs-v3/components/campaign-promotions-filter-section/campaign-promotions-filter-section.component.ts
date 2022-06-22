import {ChangeDetectionStrategy, Component, forwardRef, OnDestroy, OnInit} from '@angular/core';
import {ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';
import {DaterangeOptions} from '@ironsource/fusion-ui/components/daterange';
import {DropdownOption} from '@ironsource/fusion-ui/components/dropdown-option/v2';
import {CampaignPromotionsFilterService} from './campaign-promotions-filter.service';
import {Observable, Subject, zip} from 'rxjs';
import {map, takeUntil, tap} from 'rxjs/operators';

@Component({
    selector: 'fusion-campaign-promotions-filter',
    templateUrl: './campaign-promotions-filter-section.component.html',
    styleUrls: ['campaign-promotions-filter-section.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [{provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => CampaignPromotionsFilterSectionComponent), multi: true}]
})
export class CampaignPromotionsFilterSectionComponent implements ControlValueAccessor, OnInit, OnDestroy {
    form: FormGroup;
    dateRangeOptions: DaterangeOptions = {chipLabel: 'Date range', placeholder: 'All'};
    filtersList$: Observable<{[key: string]: DropdownOption[]}>;

    private onDestroy$ = new Subject<void>();

    constructor(private readonly fb: FormBuilder, private campaignPromotionsFilterService: CampaignPromotionsFilterService) {}

    ngOnInit() {
        this.setFiltersOptions();
        this.form = this.generateFormGroup();
        this.initListeners();
    }

    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    propagateTouched = () => {};

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    writeValue(value: any): void {
        this.form.setValue(value);
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    propagateChange = (_: any) => {};

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.propagateTouched = fn;
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setDisabledState?(isDisabled: boolean): void {}

    private setFiltersOptions() {
        this.filtersList$ = zip(
            this.campaignPromotionsFilterService.getApplicationsOptions(),
            this.campaignPromotionsFilterService.getCampaignOptions(),
            this.campaignPromotionsFilterService.getAdUnitOptions(),
            this.campaignPromotionsFilterService.getStatusOptions(),
            this.campaignPromotionsFilterService.getPromotionOptions()
        ).pipe(
            map(filters => {
                return filters.reduce((acc: {[key: string]: DropdownOption[]}, cur: {[key: string]: DropdownOption[]}) => {
                    const key = Object.keys(cur)[0];
                    acc[key] = cur[key];
                    return acc;
                }, {});
            })
        );
    }

    private initListeners() {
        this.form.valueChanges.pipe(takeUntil(this.onDestroy$), tap(console.log)).subscribe(this.propagateChange.bind(this));
    }

    private generateFormGroup() {
        return this.fb.group({
            campaigns: [],
            adUnits: [],
            applications: [],
            status: [
                [
                    {
                        id: '1',
                        displayText: 'Active'
                    }
                ]
            ],
            promotions: [],
            dateRange: []
        });
    }
}
