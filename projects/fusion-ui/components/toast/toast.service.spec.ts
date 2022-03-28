import {TestBed} from '@angular/core/testing';
import {ToastService} from './toast.service';

describe('ToastService', () => {
    beforeEach(() => TestBed.configureTestingModule({providers: [ToastService]}));

    it('should be created', () => {
        const service: ToastService = TestBed.inject(ToastService);
        expect(service).toBeTruthy();
    });

    it('should have "show" method', () => {
        const service: ToastService = TestBed.inject(ToastService);
        expect(service.show).toBeTruthy();
    });

    it('"show" method should create toast holder element with position "top-right" by default', () => {
        const service: ToastService = TestBed.inject(ToastService);

        service.show({
            type: 'warning',
            text: 'Better check yourself, you’re not looking good'
        });

        const toastHostElement = document.body.querySelector('.fu-toasts-holder');

        expect(toastHostElement).toBeTruthy();
        expect(toastHostElement.classList).toContain('top-right');
    });

    it('"show" method should create toast holder element with toast component', () => {
        const service: ToastService = TestBed.inject(ToastService);

        service.show({
            type: 'warning',
            text: 'Better check yourself, you’re not looking good'
        });

        const toastHostElement = document.body.querySelector('.fu-toasts-holder');
        expect(toastHostElement.querySelector('fusion-toast')).toBeTruthy();
    });
});
