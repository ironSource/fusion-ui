import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {TabSelectedEventData} from '@ironsource/fusion-ui/components/tabs';
import {CAMPAIGN_PROMOTIONS_TABLE_OPTIONS, CONFIGURATIONS_TABLE_COLUMNS, PROMOTIONS_TABLE_COLUMNS} from './campaign-promotions.config';
import {BehaviorSubject} from 'rxjs';
import {TableRow} from '@ironsource/fusion-ui/components/table/common/entities';

@Component({
    selector: 'network-operations-campaign-promotions-table',
    templateUrl: './campaign-promotions-table.component.html',
    styleUrls: ['./campaign-promotions-table.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CampaignPromotionsTableComponent implements OnInit {
    promotionsTableColumns = PROMOTIONS_TABLE_COLUMNS;
    configTableColumns = CONFIGURATIONS_TABLE_COLUMNS;
    promotionsTableRows: TableRow[] = [];
    configTableRows: TableRow[] = [];
    tableOptions = CAMPAIGN_PROMOTIONS_TABLE_OPTIONS;
    selectedTab$ = new BehaviorSubject<number>(0);
    promotionsPlaceholder$ = new BehaviorSubject<string>('');
    configurationsPlaceholder$ = new BehaviorSubject<string>('');

    ngOnInit() {
        this.promotionsPlaceholder$.next(`Promotions (${this.promotionsTableRows.length})`);
        this.configurationsPlaceholder$.next(`Configurations (${this.configTableRows.length})`);
    }

    tabSelected($event: TabSelectedEventData) {
        this.selectedTab$.next($event.index);
    }
}
