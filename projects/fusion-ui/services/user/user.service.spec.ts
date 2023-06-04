import {TestBed} from '@angular/core/testing';

import {UserService} from './user.service';
import {HttpClientModule} from '@angular/common/http';
import {CapitalizePipe} from '@ironsource/fusion-ui/pipes/string';
import {Observable, of} from 'rxjs';
import {ApiService} from '@ironsource/fusion-ui/services/api';
import {MFE_SHARED_CONFIG_TOKEN} from '@ironsource/fusion-ui/services/shared-config';

const USER_MOCK = {
    userName: 'TestUser',
    userEmail: 'test@test.com',
    userId: 777777,
    tracking: {
        advertiserId: 999999,
        advertiserName: 'MyName',
        advertiserPassword: 'pass897',
        advertiserDpSyntax: '{DynamicParameter}',
        s2sRegex: '/.*/',
        s2sPostback: 'http://s2s-tracking.sonic-us.supersonicads.com/s2s?advertiserId=779&password=266f87b6&dynamicParameter=',
        s2sId: 1
    },
    contactUsHash: '7711eae0c0c97808098b50f76be092f',
    permissions: [
        'advertiser',
        'financialController',
        'monetizerFinancialView',
        'manageOwnUsers',
        'advertiserUserCanAddFunds',
        'demandApiEditAllowed',
        'getOwnMonetizeApps',
        'viewCorporateReports',
        'updateOwnCampaigns',
        'breakByApplication',
        'testAdvertiser',
        'enableAdQualitySection',
        'monetizerAny',
        'monetizer',
        'mediationConfigured',
        'manageCampaigns',
        'companyInfo',
        'enableCVManager',
        'directDeals',
        'realTimePivotEnabled',
        'isAdQualityAnalysisEnabled'
    ],
    unityOrganizationId: '12345'
};

class MockApiService {
    get(): Observable<any> {
        return of('');
    }
}

// private _apiService: ApiService, @Inject(MFE_SHARED_CONFIG) @Optional() private config

describe('UserService', () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            providers: [
                UserService,
                CapitalizePipe,
                {
                    provide: ApiService,
                    useClass: MockApiService
                },
                {provide: MFE_SHARED_CONFIG_TOKEN, useValue: {}}
            ]
        })
    );

    it('should be created', () => {
        const service: UserService = TestBed.inject(UserService);
        expect(service).toBeTruthy();
    });

    describe('must check user permissions', () => {
        let service: UserService;
        beforeEach(() => {
            service = TestBed.inject(UserService);
            service.userData$.next(USER_MOCK);
        });

        it('must allow permission "monetizer"', () => {
            expect(service.isAllowed('monetizer')).toBeTruthy()
        });

        it('must not allow permission "xxx-xxx"', () => {
            expect(service.isAllowed('xxx-xxx')).toBeFalse()
        });

        it('must allow user without invert permission "monetizerTester"', () => {
            expect(service.isAllowed('!monetizerTester')).toBeTruthy()
        });

        it('must allow user without permission "monetizerTester"', () => {
            expect(service.isAllowed('monetizerTester')).toBeTruthy()
        });

    });
});
