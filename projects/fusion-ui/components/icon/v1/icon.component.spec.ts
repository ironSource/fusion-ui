/**
 * Created by andyk on 23/05/2017.
 */

import {ComponentFixture, TestBed} from '@angular/core/testing';
import {DebugElement} from '@angular/core';
import {IconComponent} from './icon.component';
import {LogService} from '@ironsource/fusion-ui/services/log';
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {HttpTestingController, provideHttpClientTesting} from '@angular/common/http/testing';
import {StorageService, StorageType} from "@ironsource/fusion-ui/services/stogare";

const dataMock: string = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"/></svg>`;

describe('IconComponent', () => {
    let component: IconComponent;
    let fixture: ComponentFixture<IconComponent>;
    let debugEl: DebugElement;
    let el: HTMLElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [IconComponent],
            imports: [],
            providers: [
                StorageService,
                LogService,
                provideHttpClient(withInterceptorsFromDi()),
                provideHttpClientTesting()
            ]
        });

        fixture = TestBed.createComponent(IconComponent);
        component = fixture.componentInstance;
        component.name = 'arrow';
        debugEl = fixture.debugElement;
        el = debugEl.nativeElement;
    });

    it('Must exist', () => {
        expect(component).toBeTruthy();
    });

    it('Must have assets URL path to icons', () => {
        // const urlPath = `${environment.assetsPath}/icons/arrow.svg`;
        expect(component.getUrlPath()).toEqual('arrow.svg');
    });

    it('Must call ngAfterViewInit method', () => {
        const spyAfterInit = spyOn(component, 'loadSvg');
        fixture.detectChanges();
        expect(spyAfterInit.calls.any()).toBe(true);
    });

    it(`Must have correct SVG tags in it's DOM element`, () => {
        const storageService = TestBed.inject(StorageService);
        if(!storageService.get(StorageType.SessionStorage, 'arrow.svg')) {
            const httpTestCtrl = TestBed.inject(HttpTestingController);
            const req = httpTestCtrl.expectOne('arrow.svg');
            expect(req.request.method).toEqual('GET');
            req.flush(dataMock);
        }

        fixture.detectChanges();
        const innerCode = el.innerHTML;
        expect(innerCode).toContain('<svg');
        expect(innerCode).toContain('</svg>');
        expect(innerCode).toContain('<path');
        expect(innerCode).toContain('</path>');
    });
});
