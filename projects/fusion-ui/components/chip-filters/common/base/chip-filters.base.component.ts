import {
    AfterViewInit,
    ChangeDetectorRef,
    ContentChildren,
    Directive,
    ElementRef,
    EventEmitter,
    Input,
    OnDestroy,
    OnInit,
    Output,
    QueryList,
    Renderer2,
    ViewChild
} from '@angular/core';
import {ChipFilterComponent} from '@ironsource/fusion-ui/components/chip-filter';
import {BehaviorSubject, combineLatest, Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {ChipType} from '@ironsource/fusion-ui/components/chip-filter/common/base';
import {FormControl} from '@angular/forms';
import {DropdownOption} from '@ironsource/fusion-ui/components/dropdown-option/entities';
import {SelectedFilters} from './chip-filters-entities';

@Directive()
export abstract class ChipFiltersBaseComponent implements AfterViewInit, OnDestroy, OnInit {
    @ContentChildren(ChipFilterComponent) chipFilters!: QueryList<ChipFilterComponent>;
    @ViewChild('addFilter', {static: true}) addFilterComponent: any;

    @Input() set disableAddFilter(val: boolean) {
        this.disableAddFilter$.next(val);
    }

    @Input() set addFilterOptions(options: DropdownOption[]) {
        this.optionsRef$.next(options);
    }

    @Input() addFiltersTitle: string;

    @Input() isSearch: boolean = false;

    @Output() onSelect = new EventEmitter<any>();

    @Output() onRemoveSelection = new EventEmitter<any>();

    showAddFilter$ = new BehaviorSubject<boolean>(null);

    disableAddFilter$ = new BehaviorSubject<boolean>(null);

    addFilterControl = new FormControl([]);

    optionsRef$ = new BehaviorSubject<DropdownOption[]>([]);

    options$ = new BehaviorSubject<DropdownOption[]>([]);

    addFilterIndex: number;

    private selectedFilters: SelectedFilters[] = [];

    private addedFilters = [];

    private onDestroy$ = new Subject<void>();

    constructor(private renderer: Renderer2, private cdr: ChangeDetectorRef) {}

    ngOnInit() {
        this.options$.next(this.optionsRef$.getValue());
    }

    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    ngAfterViewInit() {
        this.addFilterIndex = this.chipFilters.length;
        this.setPreSelectedFilters();
        this.activateAddFilter();
        this.orderChipFilters(this.chipFilters);
        this.initListeners();
    }

    private initListeners(): void {
        this.onTypeChipsChanges();

        this.onSelectedValueListener();

        this.onClosedChipListener();
        this.options$
            .asObservable()
            .pipe(takeUntil(this.onDestroy$))
            .subscribe((option: DropdownOption[]) => {
                this.showAddFilter$.next(option.length > 0);
            });
        this.addFilterControl.valueChanges.pipe(takeUntil(this.onDestroy$)).subscribe((option: DropdownOption[]) => {
            if (option) {
                this.addChipFilter(option[0]);
            }
        });
    }

    private activateAddFilter(): void {
        this.showAddFilter$.next(this.chipFilters.some(chip => chip.mode === 'dynamic'));
        this.cdr.detectChanges();
    }

    private onTypeChipsChanges(): void {
        const chipTypes: Observable<ChipType>[] = this.chipFilters.map(chip => chip.chipType$.asObservable());
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
        this.chipFilters.forEach(chip => {
            chip.onSelectedChange.pipe(takeUntil(this.onDestroy$)).subscribe(val => {
                const isSelected = this.selectedFilters.some(selectedChip => selectedChip.id === val.id);
                this.selectedFilters = isSelected
                    ? this.selectedFilters.map(filter => (filter.id === val.id ? val : filter))
                    : [...this.selectedFilters, val];

                this.onSelect.emit(this.selectedFilters);
            });
        });
    }

    private onClosedChipListener(): void {
        this.chipFilters.forEach(chip =>
            chip.onRemove.pipe(takeUntil(this.onDestroy$)).subscribe(val => {
                this.selectedFilters = this.selectedFilters.filter(selectedChip => {
                    if (val.id !== selectedChip.id) {
                        return selectedChip;
                    }
                });
                this.addedFilters = this.addedFilters.filter(filterChip => {
                    if (val.id === filterChip.id) {
                        this.restoredUnselectedFiltersOptions(filterChip, chip.mode === 'dynamic');
                    }
                    return val.id !== filterChip.id;
                });
                this.onRemoveSelection.emit(this.selectedFilters);
                this.addFilterControl.reset();
            })
        );
    }

    private addChipFilter(option: DropdownOption): void {
        this.chipFilters.toArray().forEach(chip => {
            const isSelected = this.addedFilters.some(selectedChip => selectedChip.id === chip['id']);

            if (chip['id'] === option.id && !isSelected && chip.mode === 'dynamic') {
                chip['isVisible'] = true;
                const newSelection = {
                    id: option.id,
                    value: option,
                    isSelected: chip.selected
                };
                this.addedFilters = [...this.addedFilters, newSelection];
                this.reduceSelectedFiltersOptions();
                chip.apiBase.open();
                this.cdr.markForCheck();
            } else {
                this.addFilterControl.reset();
            }
        });
    }

    private orderChipFilters(chipFilters: QueryList<ChipFilterComponent>): void {
        chipFilters.forEach((chip: ChipFilterComponent, index: number) => {
            switch (chip.chipType$.getValue()) {
                case 'RemoveAbleSelect':
                    this.renderer.setStyle(chip.element.nativeElement, 'order', `-${chipFilters.length - index}`);
                    break;
                case 'UnRemoveAbleSelect':
                    this.renderer.setStyle(chip.element.nativeElement, 'order', `-${2 * chipFilters.length - index}`);
                    break;
                default:
                    this.renderer.setStyle(chip.element.nativeElement, 'order', `${index}`);
            }
        });
    }

    private setPreSelectedFilters(): void {
        const preSelectedChip = this.chipFilters.filter(chip => !!chip['chipSelectValue']);
        this.selectedFilters = preSelectedChip.map(chip => chip['chipSelectValue']);
    }

    private reduceSelectedFiltersOptions(): void {
        const selectedValues = this.addedFilters.filter(selectedChip => selectedChip?.value);
        const newOptions = this.optionsRef$.getValue().filter(option => !selectedValues.some(select => select.id === option.id));
        this.options$.next(newOptions);
    }

    private restoredUnselectedFiltersOptions(selectedChip: SelectedFilters, isDynamic: boolean): void {
        if (isDynamic) {
            const removedChip = this.optionsRef$.getValue().filter(option => option.id === selectedChip.id)[0];
            const restoredOptions = this.options$.getValue().concat([removedChip]);
            const sortedRestoredOptions = restoredOptions.sort((a, b) => (a.id > b.id ? 1 : -1));
            this.options$.next([...sortedRestoredOptions]);
        }
    }
}
