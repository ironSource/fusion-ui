import {TestBed} from '@angular/core/testing';
import {DocsLayoutService} from './docs-layout.service';
import {timeout} from 'rxjs/operators';

describe('DocsLayoutService', () => {
    let service: DocsLayoutService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(DocsLayoutService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should start with nullable layout config observable', done => {
        service.layoutConfig$.subscribe(value => {
            expect(value).toBeNull();
            done();
        });
    });

    it('should sync layout config observable after update', done => {
        service.setLayoutConfig({sidebarMenuItems: []});
        service.layoutConfig$.subscribe(value => {
            expect(value).not.toBeNull();
            expect(value.sidebarMenuItems).toBeTruthy();
            expect(value.sidebarMenuItems.length).toEqual(0);
            done();
        });
    });
});
