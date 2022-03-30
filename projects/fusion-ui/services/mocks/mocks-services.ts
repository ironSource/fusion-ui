import {UniqueIdService} from '@ironsource/fusion-ui/services/unique-id';
import {LogService} from '@ironsource/fusion-ui/services/log';
import {of, Observable} from 'rxjs';

export class MockUniqueIdService extends UniqueIdService {
    getUniqueId() {
        return 123456789;
    }
}

export class MockLogService extends LogService {
    toConsole(msg: string, type: string) {
        console.log(type, msg);
    }
}

export class MockApiService {
    get(): Observable<any> {
        return of('');
    }
}

export class MockTimeZonesService {
    getUserDefaultTimezone() {
        return 'UTC';
    }

    get timeZones() {
        return new Observable(observer => {
            observer.next({
                'Africa/Monrovia': 'Monrovia (UTC 00:00)',
                'Africa/Abidjan': 'Abidjan (UTC 00:00)',
                UTC: 'UTC (UTC 00:00)',
                'Atlantic/Reykjavik': 'Reykjavik (UTC 00:00)',
                'Africa/Accra': 'Accra (UTC 00:00)'
            });
        });
    }
}
