import {Injectable} from '@angular/core';
// import {ApplicationsService, ConfigService} from '@network-operations/ui/services';
import {Observable, of} from 'rxjs';
import {DropdownOption} from '@ironsource/fusion-ui/components/dropdown-option/v2';
import {MOCK_CAMPAIGNS, MOK_AD_UNIT, MOK_APPLICATIONS, MOK_STATUS} from './campaign-promotions-mock-data';

@Injectable({
    providedIn: 'root'
})
export class CampaignPromotionsFilterService {
    constructor(/*protected readonly configService: ConfigService, protected readonly applicationsService: ApplicationsService*/) {}

    getApplicationsOptions(): Observable<{[key: string]: DropdownOption[]}> {
        // return this.applicationsService.getDropdownOptions({
        //     filters: {searchTerm},
        //     fields: ['id', 'name', 'icon', 'os', 'userName'],
        //     page: 1,
        //     take: 500,
        //     useCache: true
        // });

        console.log('getApplicationsOptions >');

        return of({
            application: MOK_APPLICATIONS.map(app => {
                return {
                    id: app.id,
                    name: app.name,
                    displayText: app.name,
                    icon: app.platform.toLowerCase(),
                    image: app.icon
                };
            })
        });
    }

    getStatusOptions(): Observable<{[key: string]: DropdownOption[]}> {
        // return of([...(this.configService.getDropdownOptions('STATUS') || [])]);
        return of({status: MOK_STATUS});
    }

    getAdUnitOptions(): Observable<{[key: string]: DropdownOption[]}> {
        // const options = (this.configService.getDropdownOptions('AD_UNIT_TYPE') || []).filter(
        //     option => option.displayText !== 'Banner' && option.displayText !== 'Aura'
        // );
        // return of(options);
        return of({adUnit: MOK_AD_UNIT});
    }

    getCampaignOptions(): Observable<{[key: string]: DropdownOption[]}> {
        return of({
            campaign: MOCK_CAMPAIGNS.map(campaign => {
                return {
                    id: campaign.id,
                    name: campaign.name,
                    displayText: campaign.name
                };
            })
        });
    }

    getPromotionOptions(): Observable<{[key: string]: DropdownOption[]}> {
        return of({promotion: []});
    }
}
