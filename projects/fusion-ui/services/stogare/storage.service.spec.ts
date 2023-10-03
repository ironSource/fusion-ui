import {TestBed} from '@angular/core/testing';
import {StorageService} from './storage.service';
import {StorageType} from './storage.entities';

const keyName = 'test_key';
const keyStringVal = 'test_val';
const keyObjVal = {test: 'test'};

describe('StorageService', () => {
    let service: StorageService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(StorageService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe('should work with session storage', () => {
        const cacheType = StorageType.SessionStorage;

        beforeEach(() => {
            service = TestBed.inject(StorageService);
        });

        it('should set / read string to / from session storage', () => {
            service.set(cacheType, keyName, keyStringVal);
            expect(service.get(cacheType, keyName)).toEqual(keyStringVal);
        });

        it('should set / read boolean true to / from session storage', () => {
            service.set(cacheType, keyName, true);
            expect(service.get(cacheType, keyName)).toBeTrue();
        });

        it('should set / read boolean false to / from session storage', () => {
            service.set(cacheType, keyName, false);
            expect(service.get(cacheType, keyName)).toBeFalse();
        });

        it('should set / read obj to / from session storage', () => {
            service.set(cacheType, keyName, keyObjVal);
            expect(service.get(cacheType, keyName)).toEqual(keyObjVal);
        });

        it('should set and remove from session storage', () => {
            service.set(cacheType, keyName, keyStringVal);
            expect(service.get(cacheType, keyName)).toBeTruthy();
            service.remove(cacheType, keyName);
            expect(service.get(cacheType, keyName)).toBeFalsy();
        });
    });

    describe('should work with local storage', () => {
        const cacheType = StorageType.LocalStorage;

        beforeEach(() => {
            service = TestBed.inject(StorageService);
        });

        it('should set / read string to / from local storage', () => {
            service.set(cacheType, keyName, keyStringVal);
            expect(service.get(cacheType, keyName)).toEqual(keyStringVal);
        });

        it('should set / read boolean true to / from local storage', () => {
            service.set(cacheType, keyName, true);
            expect(service.get(cacheType, keyName)).toBeTrue();
        });

        it('should set / read boolean false to / from local storage', () => {
            service.set(cacheType, keyName, false);
            expect(service.get(cacheType, keyName)).toBeFalse();
        });

        it('should set / read obj to / from local storage', () => {
            service.set(cacheType, keyName, keyObjVal);
            expect(service.get(cacheType, keyName)).toEqual(keyObjVal);
        });

        it('should set and remove from local storage', () => {
            service.set(cacheType, keyName, keyStringVal);
            expect(service.get(cacheType, keyName)).toBeTruthy();
            service.remove(cacheType, keyName);
            expect(service.get(cacheType, keyName)).toBeFalsy();
        });
    });

    describe('should work with application storage', () => {
        const cacheType = StorageType.Application;

        beforeEach(() => {
            service = TestBed.inject(StorageService);
        });

        it('should set / read string to / from session storage', () => {
            service.set(cacheType, keyName, keyStringVal);
            expect(service.get(cacheType, keyName)).toEqual(keyStringVal);
        });

        it('should set / read boolean true to / from session storage', () => {
            service.set(cacheType, keyName, true);
            expect(service.get(cacheType, keyName)).toBeTrue();
        });

        it('should set / read boolean false to / from session storage', () => {
            service.set(cacheType, keyName, false);
            expect(service.get(cacheType, keyName)).toBeFalse();
        });

        it('should set / read obj to / from session storage', () => {
            service.set(cacheType, keyName, keyObjVal);
            expect(service.get(cacheType, keyName)).toEqual(keyObjVal);
        });

        it('should set and remove from session storage', () => {
            service.set(cacheType, keyName, keyStringVal);
            expect(service.get(cacheType, keyName)).toBeTruthy();
            service.remove(cacheType, keyName);
            expect(service.get(cacheType, keyName)).toBeFalsy();
        });
    });
});
