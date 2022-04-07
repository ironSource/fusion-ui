import {TestBed} from '@angular/core/testing';
import {ColorsService} from './colors.service';
import {StyleVersion} from '@ironsource/fusion-ui';

const mokPalette = [
    '#0d148c',
    '#3083ff',
    '#8a66f0',
    '#00ccd7',
    '#fd9c0a',
    '#ff6a63',
    '#ff9cbd',
    '#9999ff',
    '#009999',
    '#acc62b',
    '#85bfff',
    '#d84c7c',
    '#33cc99',
    '#808080',
    '#c90900',
    '#0051c9',
    '#a718a7',
    '#f62f91'
];

describe('ColorsService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: ColorsService = TestBed.inject(ColorsService);
        expect(service).toBeTruthy();
    });

    it('Color service must return base colors Palette', () => {
        const colorService: ColorsService = TestBed.inject(ColorsService);
        expect(colorService.getColorPalette(StyleVersion.V2)).toEqual(mokPalette);
    });

    it('Color service must convert color HEX "#2FCF73" to RGBA (rgba(47,207,115,1)) no opacity', () => {
        const colorService: ColorsService = TestBed.inject(ColorsService);
        expect(colorService.toRgba('#2FCF73')).toEqual('rgba(47,207,115,1)');
    });

    it('Color service must convert color HEX "#2FCF73" to RGBA (rgba(47,207,115,0.5)) 50% opacity', () => {
        const colorService: ColorsService = TestBed.inject(ColorsService);
        expect(colorService.toRgba('#2FCF73', 50)).toEqual('rgba(47,207,115,0.5)');
    });

    it('Color service HEX to RGBA converter must throw exception if no color set as argument', () => {
        const colorService: ColorsService = TestBed.inject(ColorsService);
        expect(() => {
            colorService.toRgba(null);
        }).toThrowError('No HEX color value in argument');
    });
});
