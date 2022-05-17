import {AfterViewInit, ContentChildren, Directive, OnDestroy, QueryList, Renderer2} from '@angular/core';
import {ChipFilterComponent} from '@ironsource/fusion-ui';
import {combineLatest, Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {ChipType} from '@ironsource/fusion-ui/components/chip-filter/common/base';

@Directive()
export abstract class ChipFiltersBaseComponent implements AfterViewInit, OnDestroy {
    @ContentChildren(ChipFilterComponent) chipFilters!: QueryList<ChipFilterComponent>;

    private onDestroy$ = new Subject<void>();

    constructor(private renderer: Renderer2) {}

    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    ngAfterViewInit() {
        this.orderChipFilters(this.chipFilters);
        this.initListeners();
    }

    private initListeners() {
        const chipTypes: Observable<ChipType>[] = this.chipFilters.map(chip => chip.type$.asObservable());
        combineLatest(chipTypes)
            .pipe(takeUntil(this.onDestroy$))
            .subscribe(_ => {
                this.chipFilters.notifyOnChanges();
            });
        this.chipFilters.changes.pipe(takeUntil(this.onDestroy$)).subscribe((chips: QueryList<ChipFilterComponent>) => {
            this.orderChipFilters(chips);
        });
    }

    private orderChipFilters(chipFilters: QueryList<ChipFilterComponent>) {
        [...chipFilters].forEach((chip: ChipFilterComponent, index: number) => {
            switch (chip.type$.getValue()) {
                case 'RemoveAbleSelect':
                    this.renderer.setStyle(chip.element.nativeElement, 'order', `-${index}`);
                    break;
                case 'UnRemoveAbleSelect':
                    this.renderer.setStyle(chip.element.nativeElement, 'order', `-${index}`);
                    break;
                case 'AddFilter':
                    this.renderer.setStyle(chip.element.nativeElement, 'order', `${chipFilters.length}`);
                    break;
                default:
                    this.renderer.setStyle(chip.element.nativeElement, 'order', `${index}`);
            }
        });
    }
}
