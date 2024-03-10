import {ShortNumberScaleSuffixPipe} from './short-number-scale-suffix.pipe';

describe('ShortNumberScaleSuffixPipe', () => {
    it('create an instance', () => {
        const pipe = new ShortNumberScaleSuffixPipe();
        expect(pipe).toBeTruthy();
    });

    it('format number 123000 to short string "123 K"', () => {
        const pipe = new ShortNumberScaleSuffixPipe();
        expect(pipe.transform(123000)).toBe('123 K');
    });
    it('format number 764230.2680279986 to short string "764K"', () => {
        const pipe = new ShortNumberScaleSuffixPipe();
        expect(pipe.transform(764230.2680279986, {noSeparateBySpace: true, precision: 3})).toBe('764K');
    });
    it('format number 0.3 to short string "0.30 with precision: 3"', () => {
        const pipe = new ShortNumberScaleSuffixPipe();
        expect(pipe.transform(0.3, {noSeparateBySpace: true, precision: 3})).toBe('0.30');
    });

    it('format number 23500 to short string "23.5 K"', () => {
        const pipe = new ShortNumberScaleSuffixPipe();
        expect(pipe.transform(23500)).toBe('23.5 K');
    });
    it('format number 3000000 to short string 3 M', () => {
        const pipe = new ShortNumberScaleSuffixPipe();
        expect(pipe.transform(3000000, )).toBe('3 M');
    });
    it('format number 3000000 to short string 3.00 M with precision: 3', () => {
        const pipe = new ShortNumberScaleSuffixPipe();
        expect(pipe.transform(3000000, {precision: 3})).toBe('3.00 M');
    });

    it('format number 123000 to short string "123K"', () => {
        const pipe = new ShortNumberScaleSuffixPipe();
        expect(pipe.transform(123000, {noSeparateBySpace: true})).toBe('123K');
    });
    it('format number 23500 to short string "23.5K"', () => {
        const pipe = new ShortNumberScaleSuffixPipe();
        expect(pipe.transform(23500, {noSeparateBySpace: true})).toBe('23.5K');
    });
    it('format number 3000000 to short string 3M', () => {
        const pipe = new ShortNumberScaleSuffixPipe();
        expect(pipe.transform(3000000, {noSeparateBySpace: true})).toBe('3M');
    });
});
