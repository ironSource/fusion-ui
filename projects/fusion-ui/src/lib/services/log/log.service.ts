import {Inject, Injectable, InjectionToken} from '@angular/core';

export const IS_PRODUCTION_ENV = new InjectionToken<boolean>('Is Production Environment', {
    providedIn: 'root',
    factory: () => false
});

/**
 * @dynamic
 */
@Injectable({
    providedIn: 'root'
})
export class LogService {
    constructor(@Inject(IS_PRODUCTION_ENV) private isProductionEnv: boolean) {}

    private _toConsole(message: string | Error, type) {
        if (this.isProductionEnv) {
            switch (type) {
                case 'error':
                    console.error((message as Error).message);
                    break;
                case 'warning':
                    console.warn(message);
                    break;
                default:
                    console.log(message);
                    break;
            }
        }
    }

    public error(error: Error) {
        this._toConsole(error, 'error');
    }

    public warning(message) {
        this._toConsole(message, 'warning');
    }

    public console(message) {
        this._toConsole(message, 'console');
    }
}
