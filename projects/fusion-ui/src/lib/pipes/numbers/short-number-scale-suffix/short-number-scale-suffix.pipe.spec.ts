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
    it('format number 23500 to short string "23.5 K"', () => {
        const pipe = new ShortNumberScaleSuffixPipe();
        expect(pipe.transform(23500)).toBe('23.5 K');
    });
    it('format number 3000000 to short string 3 M', () => {
        const pipe = new ShortNumberScaleSuffixPipe();
        expect(pipe.transform(3000000)).toBe('3 M');
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
