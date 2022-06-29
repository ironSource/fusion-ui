import {ChangeDetectionStrategy, Component, OnDestroy, OnInit, Type} from '@angular/core';
import {TabSelectedEventData} from '@ironsource/fusion-ui/components/tabs';
import {CAMPAIGN_PROMOTIONS_TABLE_OPTIONS, CONFIGURATIONS_TABLE_COLUMNS, PROMOTIONS_TABLE_COLUMNS} from './campaign-promotions.config';
import {BehaviorSubject, of, Subject} from 'rxjs';
import {TableOptions, TableRow} from '@ironsource/fusion-ui/components/table/common/entities';
import {delay, finalize, takeUntil} from 'rxjs/operators';
import {CAMPAIGN_PROMOTION_MOCK, CAMPAIGNS_CELL_MOCK} from './campaign-promotion-data.mock';

@Component({
    selector: 'fusion-campaign-promotions-table',
    templateUrl: './campaign-promotions-table.component.html',
    styleUrls: ['./campaign-promotions-table.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CampaignPromotionsTableComponent implements OnInit, OnDestroy {
    private onDestroy$ = new Subject<void>();

    promotionsTableColumns = PROMOTIONS_TABLE_COLUMNS;
    configTableColumns = CONFIGURATIONS_TABLE_COLUMNS;
    promotionsTableRows: TableRow[] = [];
    configTableRows: TableRow[] = [];
    // tableOptions = CAMPAIGN_PROMOTIONS_TABLE_OPTIONS;
    selectedTab$ = new BehaviorSubject<number>(0);
    promotionsPlaceholder$ = new BehaviorSubject<string>('');
    configurationsPlaceholder$ = new BehaviorSubject<string>('');

    promotionsTableOption: TableOptions = {
        ...CAMPAIGN_PROMOTIONS_TABLE_OPTIONS,
        ...{
            noDataMessage: 'No promotions added',
            noDataSubMessage: 'Add new promotion',
            noDataImageBgUrl: `"data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 96 96'%3E%3Crect width='96' height='96' rx='48' fill='%23F7F8F9'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M40 72.762h6.095V50.667H40v22.095Z' fill='%23D2D5D8'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M70.498 53.744C62.166 63.38 47.6 64.438 37.963 56.107c-9.636-8.331-10.694-22.897-2.362-32.534l34.897 30.17Z' fill='%23EDEFF0'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M70.482 53.746c-1.51 1.747-10.545-3.588-20.179-11.916-9.633-8.33-16.218-16.498-14.707-18.246 1.511-1.746 10.545 3.588 20.179 11.917 9.633 8.33 16.218 16.497 14.707 18.245Z' fill='%23D2D5D8'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='m57.168 42.164-1.585-1.293 4.989-10.918-10.083 6.515-1.484-1.466 12.551-8.076c.46-.297 1.068-.242 1.512.142.442.383.585.976.355 1.476l-6.255 13.62Z' fill='%23DDDFE1'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M65.569 29.848a3.81 3.81 0 1 1-5.763-4.983 3.81 3.81 0 0 1 5.763 4.983Z' fill='%23D2D5D8'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M69.456 26.34c-.245-3.371-3.184-5.905-6.56-5.67l-.149-2.055c4.49-.334 8.435 3.072 8.763 7.577l-2.054.149Z' fill='%23DDDFE1'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M73.808 25.02a9.442 9.442 0 0 0-3.263-6.5 9.433 9.433 0 0 0-6.904-2.29l-.148-2.053a11.487 11.487 0 0 1 8.4 2.785 11.484 11.484 0 0 1 3.969 7.909l-2.054.149ZM53.301 23.294a1.07 1.07 0 1 1-2.138-.001 1.07 1.07 0 0 1 2.138 0ZM69.037 38.242a.853.853 0 1 0 .001 1.706.853.853 0 0 0-.001-1.706Zm0 3.077a2.227 2.227 0 0 1-2.225-2.225c0-1.227.998-2.225 2.225-2.225 1.226 0 2.225.998 2.225 2.225a2.227 2.227 0 0 1-2.225 2.224ZM52.735 15.469a1.073 1.073 0 1 0 1.072 1.072c0-.591-.481-1.072-1.072-1.072Zm0 3.517a2.448 2.448 0 0 1-2.446-2.445 2.448 2.448 0 0 1 2.446-2.445 2.448 2.448 0 0 1 2.446 2.445 2.448 2.448 0 0 1-2.446 2.445ZM33.143 70.095a3.428 3.428 0 1 1-6.857.001 3.428 3.428 0 0 1 6.857 0Z' fill='%23DDDFE1'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M71.536 81.143h-46.31c-3.202 0-5.797-2.54-5.797-5.674v-.08c0-3.134 2.595-5.674 5.797-5.674h46.31c3.202 0 5.797 2.54 5.797 5.674v.08c0 3.134-2.595 5.674-5.797 5.674Z' fill='%23EDEFF0'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M70.857 78.096a1.904 1.904 0 1 1 0-3.809 1.904 1.904 0 0 1 0 3.809ZM66.286 78.096a1.904 1.904 0 1 1-.001-3.809 1.904 1.904 0 0 1 0 3.809ZM49.905 76.19c0 1.053.853 1.906 1.904 1.906h9.905a1.905 1.905 0 1 0 0-3.81H51.81a1.905 1.905 0 0 0-1.905 1.905Z' fill='%23fff'/%3E%3C/svg%3E"`
        }
    };

    configurationTableOptions: TableOptions = {
        ...CAMPAIGN_PROMOTIONS_TABLE_OPTIONS,
        ...{
            noDataMessage: 'No promotions added',
            noDataSubMessage: 'Add new promotion',
            noDataImageBgUrl: `"data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 96 96'%3E%3Crect width='96' height='96' rx='48' fill='%23F7F8F9'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M40 72.762h6.095V50.667H40v22.095Z' fill='%23D2D5D8'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M70.498 53.744C62.166 63.38 47.6 64.438 37.963 56.107c-9.636-8.331-10.694-22.897-2.362-32.534l34.897 30.17Z' fill='%23EDEFF0'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M70.482 53.746c-1.51 1.747-10.545-3.588-20.179-11.916-9.633-8.33-16.218-16.498-14.707-18.246 1.511-1.746 10.545 3.588 20.179 11.917 9.633 8.33 16.218 16.497 14.707 18.245Z' fill='%23D2D5D8'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='m57.168 42.164-1.585-1.293 4.989-10.918-10.083 6.515-1.484-1.466 12.551-8.076c.46-.297 1.068-.242 1.512.142.442.383.585.976.355 1.476l-6.255 13.62Z' fill='%23DDDFE1'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M65.569 29.848a3.81 3.81 0 1 1-5.763-4.983 3.81 3.81 0 0 1 5.763 4.983Z' fill='%23D2D5D8'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M69.456 26.34c-.245-3.371-3.184-5.905-6.56-5.67l-.149-2.055c4.49-.334 8.435 3.072 8.763 7.577l-2.054.149Z' fill='%23DDDFE1'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M73.808 25.02a9.442 9.442 0 0 0-3.263-6.5 9.433 9.433 0 0 0-6.904-2.29l-.148-2.053a11.487 11.487 0 0 1 8.4 2.785 11.484 11.484 0 0 1 3.969 7.909l-2.054.149ZM53.301 23.294a1.07 1.07 0 1 1-2.138-.001 1.07 1.07 0 0 1 2.138 0ZM69.037 38.242a.853.853 0 1 0 .001 1.706.853.853 0 0 0-.001-1.706Zm0 3.077a2.227 2.227 0 0 1-2.225-2.225c0-1.227.998-2.225 2.225-2.225 1.226 0 2.225.998 2.225 2.225a2.227 2.227 0 0 1-2.225 2.224ZM52.735 15.469a1.073 1.073 0 1 0 1.072 1.072c0-.591-.481-1.072-1.072-1.072Zm0 3.517a2.448 2.448 0 0 1-2.446-2.445 2.448 2.448 0 0 1 2.446-2.445 2.448 2.448 0 0 1 2.446 2.445 2.448 2.448 0 0 1-2.446 2.445ZM33.143 70.095a3.428 3.428 0 1 1-6.857.001 3.428 3.428 0 0 1 6.857 0Z' fill='%23DDDFE1'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M71.536 81.143h-46.31c-3.202 0-5.797-2.54-5.797-5.674v-.08c0-3.134 2.595-5.674 5.797-5.674h46.31c3.202 0 5.797 2.54 5.797 5.674v.08c0 3.134-2.595 5.674-5.797 5.674Z' fill='%23EDEFF0'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M70.857 78.096a1.904 1.904 0 1 1 0-3.809 1.904 1.904 0 0 1 0 3.809ZM66.286 78.096a1.904 1.904 0 1 1-.001-3.809 1.904 1.904 0 0 1 0 3.809ZM49.905 76.19c0 1.053.853 1.906 1.904 1.906h9.905a1.905 1.905 0 1 0 0-3.81H51.81a1.905 1.905 0 0 0-1.905 1.905Z' fill='%23fff'/%3E%3C/svg%3E"`
        }
    };

    promotionsData = CAMPAIGN_PROMOTION_MOCK;
    loading$ = new BehaviorSubject(false);

    ngOnInit() {
        this.promotionsPlaceholder$.next(`Promotions (${this.promotionsTableRows.length})`);
        this.configurationsPlaceholder$.next(`Configurations (${this.configTableRows.length})`);

        this.getDataToTables();
    }

    ngOnDestroy(): void {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    tabSelected($event: TabSelectedEventData) {
        this.selectedTab$.next($event.index);
    }

    getDataToTables() {
        this.loading$.next(true);
        this.getExampleData()
            .pipe(
                takeUntil(this.onDestroy$),
                finalize(() => {
                    this.loading$.next(false);
                    this.promotionsPlaceholder$.next(`Promotions (${this.promotionsTableRows.length})`);
                    this.configurationsPlaceholder$.next(`Configurations (${this.configTableRows.length})`);
                })
            )
            .subscribe(data => {
                this.promotionsTableRows = data.map(item => {
                    return {
                        name: item.campaignId,
                        advEntityFull: {
                            advEntity: {
                                id: item.campaign.id,
                                name: item.campaign.name,
                                icon: item.campaign.os == 2 ? 'android' : 'ios',
                                imageUrl: item.campaign.icon
                            }
                        },
                        status: {
                            config: {
                                displayText: item.status == 6 ? 'Paused' : item.status,
                                defaultColor: item.status == 6 ? 'grey' : 'green',
                                displayPauseButton: item.status != 6,
                                id: 1,
                                entityId: 1
                            }
                        },
                        creationDate: new Date(item.createdTime),
                        createdBy: item.createdBy,
                        campaigns: {
                            config: {
                                entities: CAMPAIGNS_CELL_MOCK.slice(0, Math.floor(Math.random() * 14)),
                                labelPrefix: 'Affecting',
                                entitiesName: 'campaigns',
                                entityName: 'campaign'
                            }
                        },
                        comments: item.description
                    };
                });
            });
    }

    getExampleData() {
        return of(this.promotionsData).pipe(delay(1000));
    }

    onLoadNextPageOfData() {
        console.log(':onLoadNextPageOfData:');

        this.promotionsTableOption.pagination.loading = false;
        this.promotionsTableOption = {...this.promotionsTableOption};
    }
}
