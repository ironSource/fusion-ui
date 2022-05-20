import {AfterViewInit, ContentChildren, Directive, EventEmitter, Input, OnDestroy, Output, QueryList, Renderer2} from '@angular/core';
import {ChipFilterComponent} from '@ironsource/fusion-ui/components/chip-filter';
import {BehaviorSubject, combineLatest, Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {ChipType} from '@ironsource/fusion-ui/components/chip-filter/common/base';
import {FormControl} from '@angular/forms';
import {DropdownOption} from '@ironsource/fusion-ui/components/dropdown';

@Directive()
export abstract class ChipFiltersBaseComponent implements AfterViewInit, OnDestroy {
    @ContentChildren(ChipFilterComponent) chipFilters!: QueryList<ChipFilterComponent>;

    @Input() set disableAddFilter(val: boolean) {
        this.disableAddFilter$.next(val);
    }

    @Input() set addFilterOptions(options: DropdownOption[]) {
        this.options$.next(options);
    }

    @Output() onSelect = new EventEmitter<any>();

    @Output() onRemoveSelection = new EventEmitter<any>();

    showAddFilter$ = new BehaviorSubject<boolean>(null);

    disableAddFilter$ = new BehaviorSubject<boolean>(null);

    formControl = new FormControl(null);

    options$ = new BehaviorSubject<DropdownOption[]>([]);

    private onDestroy$ = new Subject<void>();

    constructor(private renderer: Renderer2) {}

    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    ngAfterViewInit() {
        this.activateAddFilter();
        this.orderChipFilters(this.chipFilters);
        this.initListeners();
    }

    private activateAddFilter() {
        setTimeout(() => {
            this.showAddFilter$.next(this.chipFilters.some(chip => chip.type === 'dynamic'));
        });
    }

    private initListeners() {
        this.onTypeChipsChanges();

        this.onSelectedValueListener();

        this.onClosedChipListener();
    }

    private onTypeChipsChanges(): void {
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

    addChipFilter($event) {
        console.log('>>>>', $event);
        this.chipFilters.forEach(chip => {
            if (chip.id === 2) {
                chip.isVisible = true;
            }
        });
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
                default:
                    this.renderer.setStyle(chip.element.nativeElement, 'order', `${index}`);
            }
        });
    }
}
