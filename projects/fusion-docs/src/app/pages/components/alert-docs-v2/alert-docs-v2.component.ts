import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {BehaviorSubject, Observable, of, Subject, throwError} from 'rxjs';
import {StyleVersion} from '@ironsource/fusion-ui/components/fusion-base';
import {delay, finalize, take, takeUntil, tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {DocsMenuItem} from '../../../components/docs-menu/docs-menu';
import {DocsLayoutService} from '../../docs/docs-layout.service';
import {VersionService} from '../../../services/version/version.service';
import {FileDragAndDropState} from '@ironsource/fusion-ui/components/file-drag-and-drop';
import {FormControl} from '@angular/forms';
import {
    MOCK_CAMPAIGNS,
    MOCK_COUNTRIES,
    MOCK_USERS
} from '@ironsource/fusion-ui/components/chip-filters/v3/stories/chip-filters.stories.mock';
import {ChipFilterComponentConfigurations} from '@ironsource/fusion-ui/components/chip-filter/common/base';
import {DropdownOption} from '@ironsource/fusion-ui/components/dropdown-option';

@Component({
    selector: 'fusion-alert-docs-v2',
    templateUrl: './alert-docs-v2.component.html',
    styleUrls: ['./alert-docs-v2.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertDocsV2Component implements OnInit, OnDestroy {
    private onDestroy$ = new Subject<void>();
    selectedVersion$: Observable<StyleVersion> = this.versionService.styleVersion$.pipe(takeUntil(this.onDestroy$));

    someTestVar = 'test for capitalize pipe';

    rightMenu: DocsMenuItem[] = [
        {
            title: 'Type',
            items: [
                {
                    label: 'Basic',
                    scrollTo: '#typeBasic',
                    scrollOffset: 30
                },
                {
                    label: 'Without "close" button',
                    scrollTo: '#typeNoClose',
                    scrollOffset: 15
                },
                {
                    label: 'Size "small"',
                    scrollTo: '#typeSmall',
                    scrollOffset: 15
                }
            ]
        },
        {
            title: 'Configuration',
            items: [
                {
                    label: 'Parameters',
                    scrollTo: '#params',
                    scrollOffset: 30
                },
                {
                    label: 'Events',
                    scrollTo: '#events',
                    scrollOffset: 30
                }
            ]
        }
    ];

    fileInUpload$ = new BehaviorSubject(false);
    fileUploadDisabled$ = new BehaviorSubject(false);

    fileState$ = new BehaviorSubject<FileDragAndDropState>(null);

    //------------
    fcChip1 = new FormControl();
    configChip1: ChipFilterComponentConfigurations = {id: 1, mode: 'static', close: true};
    optionsChip1 = MOCK_USERS;
    placeholderPrefixChip1 = 'User';
    placeholderChip1 = 'All';
    searchChip1 = true;
    optionsTitleChip1 = 'User';

    dynamicFiltersAll = [
        {
            fcChip: new FormControl(MOCK_COUNTRIES.slice(1, 7)),
            configChip: {id: 4, mode: 'dynamic', close: true},
            optionsChip: MOCK_COUNTRIES,
            placeholderChip: 'All',
            optionsTitleChip: 'Country'
        },
        {
            fcChip: new FormControl(MOCK_CAMPAIGNS.slice(3, 5)),
            configChip: {id: 5, mode: 'dynamic', close: true},
            optionsChip: MOCK_CAMPAIGNS,
            placeholderChip: 'All',
            optionsTitleChip: 'Campaigns'
        }
    ];

    selectedDynamicFilters = this.dynamicFiltersAll.filter(item => {
        return !!item.fcChip.value;
    });

    // region Add Filter Chip props
    addFiltersTitle = 'Add filter by:';
    addFilterOptions: DropdownOption[] = this.dynamicFiltersAll.map(filterDynamic => ({
        id: filterDynamic.configChip.id,
        displayText: filterDynamic.optionsTitleChip
    }));
    // endregion
    //------------

    chbFormControl = new FormControl({value: true, disabled: true});

    constructor(private versionService: VersionService, private router: Router, private docLayoutService: DocsLayoutService) {}

    ngOnInit() {
        this.selectedVersion$.subscribe((styleVersion: StyleVersion) => {
            if (styleVersion === StyleVersion.V1) {
                this.router.navigate(['docs/components/alert']);
            }
        });
        this.chbFormControl.valueChanges.subscribe(value => {
            console.log('>>', value);
        });
        this.docLayoutService.updateLayoutHeaderTitle({text: 'Alerts', subtitle: 'Updated 7 hours ago', type: 'static'});
    }

    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    linkClicked($event): void {
        $event.preventDefault();
    }

    onFilesSelected(files: FileList) {
        of(files.item(0))
            .pipe(
                takeUntil(this.onDestroy$),
                tap((file: File) => {
                    this.fileInUpload$.next(true);
                    this.fileState$.next({name: file.name});
                }),
                delay(2000),
                finalize(() => {
                    this.fileInUpload$.next(false);
                })
            )
            .subscribe(
                (file: File) => {
                    this.fileState$.next({name: file.name, state: 'success'});
                },
                error => {
                    this.fileState$.next({...this.fileState$.getValue(), state: 'error', message: error.errorMessage});
                }
            );
    }

    onFileDelete(fileName: string) {
        console.log('delete file', fileName);
        this.fileInUpload$.next(true);
        setTimeout(_ => {
            this.fileInUpload$.next(false);
        }, 1000);
    }

    dynamicChipSelect(selected) {
        if (!this.selectedDynamicFilters.some(item => selected.id === item.configChip.id)) {
            const index = this.dynamicFiltersAll.findIndex(item => item.configChip.id === selected.id);
            this.selectedDynamicFilters = [...this.selectedDynamicFilters, ...[this.dynamicFiltersAll[index]]];
        }
    }

    onDynamicChipRemove(chipIdToRemove) {
        this.selectedDynamicFilters = [...this.selectedDynamicFilters.filter(chip => chip.configChip.id !== chipIdToRemove)];
    }

    onButtonClicked($event) {
        console.log('button clicked', $event);
    }
}
