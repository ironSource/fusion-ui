import {AfterViewInit, ContentChildren, Directive, EventEmitter, Input, OnDestroy, Output, QueryList, Renderer2} from '@angular/core';
import {ChipFilterComponent} from '@ironsource/fusion-ui';
import {combineLatest, Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {ChipType} from '@ironsource/fusion-ui/components/chip-filter/common/base';

@Directive()
export abstract class ChipFiltersBaseComponent implements AfterViewInit, OnDestroy {
    @ContentChildren(ChipFilterComponent) chipFilters!: QueryList<ChipFilterComponent>;

    @Output() onSelect = new EventEmitter<any>();

    @Output() onRemoveSelection = new EventEmitter<any>();

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
        this.onChipsChanges();

        this.onSelectedValueListener();

        this.onClosedChipListener();
    }

    private onChipsChanges(): void {
        const chipTypes: Observable<ChipType>[] = this.chipFilters.map(chip => chip.chipCssType$.asObservable());
        combineLatest(chipTypes)
            .pipe(takeUntil(this.onDestroy$))
            .subscribe(_ => {
                this.chipFilters.notifyOnChanges();
            });
        this.chipFilters.changes.pipe(takeUntil(this.onDestroy$)).subscribe((chips: QueryList<ChipFilterComponent>) => {
            this.orderChipFilters(chips);
        });
    }

    private onSelectedValueListener(): void {
        this.chipFilters.forEach(chip => chip.onSelectedChange.pipe(takeUntil(this.onDestroy$)).subscribe(val => this.onSelect.emit(val)));
    }

    private onClosedChipListener(): void {
        this.chipFilters.forEach(chip => chip.onRemove.pipe(takeUntil(this.onDestroy$)).subscribe(val => this.onRemoveSelection.emit(val)));
    }

    private orderChipFilters(chipFilters: QueryList<ChipFilterComponent>) {
        [...chipFilters].forEach((chip: ChipFilterComponent, index: number) => {
            switch (chip.chipCssType$.getValue()) {
                case 'RemoveAbleSelect':
                    this.renderer.setStyle(chip.element.nativeElement, 'order', `-${index}`);
                    break;
                case 'UnRemoveAbleSelect':
                    this.renderer.setStyle(chip.element.nativeElement, 'order', `-${chipFilters.length - index}`);
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
