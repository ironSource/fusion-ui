/**
 * Created by andyk on 23/05/2017.
 */

import {ComponentFixture, TestBed} from '@angular/core/testing';
import {DebugElement} from '@angular/core';

import {Observable, of} from 'rxjs';
import {SvgComponent} from './svg.component';
import {ApiService} from '../../../services/api/api.service';
import {CacheService} from '../../../services/cache/cache.service';
import {LogService} from '../../../services/log/log.service';

const dataMock: string =
    '<?xml version="1.0" encoding="UTF-8"?>' +
    '<svg xmlns="http://www.w3.org/2000/svg" width="147" height="29" viewBox="0 0 147 29">' +
    '<path fill="none" fill-rule="evenodd" d="M43.602 7.04v2.827h-3.97V7.04h3.97zm0 4.09V21.3h-3.97V11.13h3.97zm5.23' +
    ' 1.565c.441-.662.882-1.083 1.45-1.384.566-.3 1.133-.421 1.826-.421.315 0' +
    ' .505.06.63.12v3.19h-.062c-1.198-.181-2.08-.061-2.71.42-.63.482-.945 1.324-.945 2.467v4.152h-3.97V11.13h3.781v1.564zm7.561' +
    ' 8.544c-.693-.301-1.323-.662-1.827-1.144a5.552 5.552 0 0 1-1.197-1.684c-.315-.662-.441-1.384-.441-2.166s.126-1.504.44-2.166a6.707' +
    ' 6.707 0 0 1 1.198-1.745c.504-.541 1.134-.842 1.827-1.143.693-.301 1.512-.421 2.394-.421.883 0 1.702.12 2.395.42.693.302 1.323.663' +
    ' 1.827 1.144a4.72 4.72 0 0 1 1.134 1.745c.252.662.378 1.384.378 2.166s-.126 1.504-.378 2.166a4.495 4.495 0 0 1-1.134' +
    ' 1.684c-.504.482-1.134.843-1.827 1.144-.693.3-1.512.42-2.395.42-.882 0-1.7-.12-2.394-.42zm3.78-2.888c.316-.542.442-1.204.442-2.106' +
    ' 0-.903-.126-1.564-.441-2.106-.315-.541-.757-.782-1.387-.782s-1.07.24-1.386.782c-.315.542-.44 1.203-.44 2.106 0 .902.125 1.564.44' +
    ' 2.106.315.541.756.782 1.386.782.63 0 1.072-.24 1.387-.782zm9.2-5.776a5.562 5.562 0 0 1 1.45-1.264c.503-.3 1.196-.421 1.952-.421' +
    ' 1.26 0 2.206.361 2.773 1.083.567.722.945 1.685.945' +
    ' 2.828v6.618h-3.97v-5.656c0-.541-.126-.962-.378-1.263-.252-.3-.63-.481-1.134-.481-.504 0-.882.18-1.197.541-.315.361-.441.842-.441' +
    ' 1.384v5.475h-3.844V11.131h3.78l.064 1.444zm12.098' +
    ' 8.784c-.82-.18-1.576-.481-2.206-.903-.63-.42-1.134-.902-1.449-1.504-.315-.601-.567-1.323-.567-2.166h4.474c.063.602.315 1.023.756' +
    ' 1.264.44.24 1.008.42 1.764.42.19 0 .441 0 .63-.06.19-.06.441-.12.63-.18.19-.06.315-.24.441-.36.126-.121.19-.362.19-.542' +
    ' 0-.18-.064-.421-.19-.542-.126-.12-.315-.3-.567-.36-.252-.06-.504-.181-.882-.302-.378-.12-.756-.18-1.197-.3-.63-.12-1.26-.301-1.953-' +
    '.542-.693-.24-1.26-.481-1.765-.782a4.318 4.318 0 0 1-1.323-1.263c-.378-.542-.504-1.144-.504-1.926 0-.842.19-1.504.504-2.106.315-.601' +
    '.756-1.022 1.323-1.383s1.198-.602 1.954-.783c.756-.18 1.575-.24 2.394-.24.756 0 1.512.06 2.205.24.693.18 1.387.422 1.89.783.505.36 1' +
    '.009.782 1.324 1.383.315.602.504 1.204.504 1.986h-4.348c-.063-.361-.252-.722-.567-.903a2.624 2.624 0 0 0-1.323-.36c-.504 0-.882.12-1' +
    '.197.3-.315.18-.441.421-.441.722 0 .24.063.361.252.542.189.18.378.24.693.36.315.121.693.181 1.134.302.441.12.945.18 1.512.3.63.12 1.' +
    '26.301 1.827.542.568.24 1.135.481 1.639.842s.882.782 1.134 1.264c.252.481.44 1.143.44 1.925s-.188 1.504-.503 2.046c-.315.541-.82 1.0' +
    '83-1.386 1.504-.567.42-1.26.722-2.08.902-.819.18-1.638.301-2.52.301-.945-.12-1.827-.18-2.646-.421zm13.043-.12c-.694-.301-1.324-.662-' +
    '1.828-1.144a5.552 5.552 0 0 1-1.197-1.684c-.315-.662-.441-1.384-.441-2.166s.126-1.504.441-2.166a6.707 6.707 0 0 1 1.197-1.745c.504-.' +
    '541 1.134-.842 1.828-1.143.693-.301 1.512-.421 2.394-.421.882 0 1.701.12 2.394.42.693.302 1.323.663 1.827 1.144a4.72 4.72 0 0 1 1.13' +
    '5 1.745c.252.662.378 1.384.378 2.166s-.126 1.504-.378 2.166a4.495 4.495 0 0 1-1.135 1.684c-.504.482-1.134.843-1.827 1.144-.693.3-1.5' +
    '12.42-2.394.42-.882 0-1.701-.12-2.394-.42zm3.717-2.888c.315-.542.441-1.204.441-2.106 0-.903-.126-1.564-.441-2.106-.315-.541-.756-.78' +
    '2-1.386-.782-.63 0-1.071.24-1.386.782-.315.542-.441 1.203-.441 2.106 0 .902.126 1.564.44 2.106.316.541.757.782 1.387.782s1.071-.24 1' +
    '.386-.782zm12.539 1.684c-.441.542-.945.963-1.45 1.204a4.57 4.57 0 0 1-1.89.42c-.63 0-1.197-.12-1.7-.3-.505-.18-.883-.481-1.198-.782-' +
    '.315-.301-.567-.782-.693-1.264-.126-.481-.252-1.023-.252-1.624V11.13h3.97v5.655c0 1.083.503 1.625 1.449 1.625.504 0 .945-.18 1.197-.' +
    '482.252-.3.44-.782.44-1.323V11.13h3.97v10.168h-3.78v-1.264h-.063zm9.01-7.34c.441-.662.882-1.083 1.45-1.384.566-.3 1.133-.421 1.827-.' +
    '421.315 0 .504.06.63.12v3.19h-.063c-1.198-.181-2.08-.061-2.71.42-.63.482-.945 1.324-.945 2.467v4.152h-4.032V11.13h3.78l.063 1.564zm7' +
    '.561 8.544c-.693-.301-1.323-.662-1.827-1.144-.504-.48-.945-1.022-1.197-1.684-.252-.662-.441-1.384-.441-2.166s.126-1.504.44-2.166a6.7' +
    '07 6.707 0 0 1 1.198-1.745c.504-.541 1.134-.842 1.827-1.143.693-.301 1.512-.421 2.395-.421.756 0 1.449.12 2.079.3.63.181 1.134.482 1' +
    '.638.843.504.36.82.782 1.071 1.263.252.482.441 1.023.504 1.625h-3.78c-.126-.482-.315-.842-.504-1.083-.19-.24-.567-.361-1.008-.361-.6' +
    '3 0-1.072.24-1.387.722-.315.481-.44 1.143-.44 2.045 0 .843.125 1.505.44 1.986.315.481.756.722 1.387.722.504 0 .882-.12 1.07-.421.19-' +
    '.301.379-.722.442-1.324h3.78a4.15 4.15 0 0 1-.378 1.745 3.975 3.975 0 0 1-1.07 1.384 5.588 5.588 0 0 1-1.702.962 6.498 6.498 0 0 1-2' +
    '.205.361c-.82.12-1.639 0-2.332-.3zm11.53 0c-.692-.241-1.322-.662-1.826-1.144-.504-.48-.946-1.022-1.198-1.684-.252-.662-.44-1.384-.44' +
    '-2.166s.125-1.504.44-2.166a6.707 6.707 0 0 1 1.198-1.745c.504-.541 1.07-.842 1.827-1.143.756-.301 1.449-.421 2.331-.421.882 0 1.575.' +
    '12 2.205.36.63.241 1.198.602 1.702 1.024.63.601 1.134 1.263 1.449 2.165.315.903.441 1.805.441 2.828h-7.75c.126.602.315 1.083.693 1.3' +
    '84.378.3.82.481 1.386.481.693 0 1.197-.24 1.512-.782h3.844c-.126.482-.315.903-.693 1.324-.378.421-.82.782-1.323 1.143-.504.3-1.008.5' +
    '42-1.576.662-.567.12-1.197.18-1.827.18a6.075 6.075 0 0 1-2.394-.3zm1.009-7.4c-.315.3-.504.781-.63 1.323h3.654c-.063-.602-.252-1.023-' +
    '.567-1.324a1.65 1.65 0 0 0-1.197-.481c-.504 0-.945.18-1.26.481zM0 0v29h32.639V0H0zm11.972 13.838c0 1.745-.63 2.768-2.017 3.129 1.45.' +
    '541 2.017 1.504 2.017 3.61v3.068l-5.608-.06v-3.97c0-.783-.945-.903-1.701-1.144v-2.888c.756-.24 1.7-.481 1.7-1.083v-4.212h5.609v3.55z' +
    'm0-4.452H6.3V5.295h5.67v4.09zm8.254 14.68c-5.04 0-7.435-2.527-7.435-5.715v-.963h5.608v.421c0 1.023.567 1.745 1.638 1.745 1.008 0 1.5' +
    '12-.421 1.512-1.203 0-2.106-8.57-1.745-8.57-7.702 0-3.188 2.143-5.956 7.436-5.956 4.789 0 7.12 2.527 7.12 5.716v1.083h-5.608v-.602c0' +
    '-.842-.44-1.685-1.512-1.685-.82 0-1.323.422-1.323 1.144 0 2.286 8.632 1.744 8.632 7.64 0 3.19-2.268 6.077-7.498 6.077z"/> </svg>';

class MockApiService {
    get(): Observable<any> {
        return of(dataMock);
    }
}

describe('SVG Component', () => {
    let component: SvgComponent;
    let fixture: ComponentFixture<SvgComponent>;
    let debugEl: DebugElement;
    let el: HTMLElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            declarations: [SvgComponent],
            providers: [LogService, CacheService, {provide: ApiService, useClass: MockApiService}]
        });

        fixture = TestBed.createComponent(SvgComponent);
        component = fixture.componentInstance;

        debugEl = fixture.debugElement;
        el = debugEl.nativeElement;
    });

    it('Must exist', () => {
        expect(component).toBeTruthy();
    });

    it('Must have assets URL path to svg file', () => {
        component.path = 'logos/is-logo-header';
        fixture.detectChanges();

        const urlPath = `logos/is-logo-header.svg`;
        expect(component.getUrlPath()).toBe(urlPath);
    });

    it('Must call ngAfterViewInit method', () => {
        const spyAfterInit = spyOn(component, 'loadSvg');
        fixture.detectChanges();
        expect(spyAfterInit.calls.any()).toBe(true);
    });

    it(`Must have correct SVG tags in it's DOM element`, () => {
        component.path = 'logos/is-logo-header';
        fixture.detectChanges();
        const innerCode = el.innerHTML;
        expect(innerCode).toContain('<svg');
        expect(innerCode).toContain('</svg>');
        expect(innerCode).toContain('<path');
        expect(innerCode).toContain('</path>');
    });
});
