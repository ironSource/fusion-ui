/*
 * Created on 2020.9.23 By Andy Kononenko (andyk@ironsrc.com)
 */

import {SecondsToMinutesPipe} from './seconds-to-minutes.pipe';

describe('SecondsToMinutesPipe', () => {
    it('create an instance', () => {
        const pipe = new SecondsToMinutesPipe();
        expect(pipe).toBeTruthy();
    });

    it('format seconds 60 to string "01:00"', () => {
        const pipe = new SecondsToMinutesPipe();
        expect(pipe.transform(60)).toBe('01:00');
    });

    it('format seconds 0 to string "0:00"', () => {
        const pipe = new SecondsToMinutesPipe();
        expect(pipe.transform(0)).toBe('00:00');
    });

    it('format seconds 1834 to string "0:00"', () => {
        const pipe = new SecondsToMinutesPipe();
        expect(pipe.transform(60 * 30 + 34)).toBe('30:34');
    });
});
