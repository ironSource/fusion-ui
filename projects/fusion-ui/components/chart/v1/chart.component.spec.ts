import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ChartComponent} from './chart.component';
import {LoaderModule} from '@ironsource/fusion-ui/components/loader';
import {UniqueIdService} from '@ironsource/fusion-ui/services/unique-id';
import {CurrencyPipe, DatePipe, DecimalPipe, PercentPipe} from '@angular/common';
import {ColorsService} from '@ironsource/fusion-ui/services/colors';
import {ShortNumberScaleSuffixPipe} from '@ironsource/fusion-ui/pipes/numbers';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {ShortNumberScaleSuffixModule} from '@ironsource/fusion-ui/pipes/numbers';
import {CloneModule} from '@ironsource/fusion-ui/pipes/clone';
import {ClonePipe} from '@ironsource/fusion-ui/pipes/clone';
import {ChartDataService, ChartType, ChartData} from '@ironsource/fusion-ui/components/chart/common/base';

const mockRawData: ChartData = {
    legends: [
        {id: 'totals', value: 24688.21, displayName: 'Sum'},
        {id: 9930, value: 24688.21, displayName: 'AdColony'},
        {id: 9928, value: 19358.79, displayName: 'Vungle'},
        {id: 9935, value: 16296.92, displayName: 'AppLovin'},
        {id: 9936, value: 12255.43, displayName: 'Chartboost'},
        {id: 9899, value: 22381, displayName: 'ironSource'},
        {id: 9917, value: 9666.9, displayName: 'UnityAds'},
        {id: 9929, value: 6199.33, displayName: 'Flurry'},
        {id: 9932, value: 2472.89, displayName: 'NativeX'},
        {id: 9926, value: 1240.57, displayName: 'HyprMX'}
    ],
    data: {
        '2017-04-13': [8048.16, 1588.59, 1583.47, 1037.83, 899.56, 1582.28, 726.11, 385.66, 160.59, 84.07],
        '2017-04-14': [8458.49, 1902.16, 1375.9, 1242.31, 952.88, 1628.72, 664.01, 426.95, 177.4, 88.16],
        '2017-04-15': [7997.71, 1678.1, 1395.44, 1193.07, 810.74, 1556.24, 681.19, 410.84, 184.95, 87.14],
        '2017-04-16': [8098.79, 1824.22, 1399.59, 1109.07, 812.16, 1588.8, 697.13, 418.4, 166.78, 82.64],
        '2017-04-17': [8274.74, 1825.24, 1281.23, 1079.15, 962.45, 1682.44, 700.84, 463.31, 181.19, 98.89],
        '2017-04-18': [8148.92, 1835.68, 1323.65, 1181.38, 834.57, 1576.21, 686.56, 439.27, 181.75, 89.85],
        '2017-04-19': [8049.24, 1563.08, 1349.97, 1194.31, 931.96, 1581.99, 684.67, 480.08, 174.89, 88.29],
        '2017-04-20': [8051.27, 1817.77, 1391.99, 1194.24, 750.56, 1538.59, 654.87, 437.54, 181.44, 84.27],
        '2017-04-21': [8100.8, 1817.48, 1288.4, 1130.7, 943.76, 1527.4, 650.1, 476.39, 175.36, 91.21],
        '2017-04-22': [7809.69, 1699.39, 1151.59, 1094.15, 903.09, 1579.18, 656.18, 454.44, 177.95, 93.72],
        '2017-04-23': [8208.56, 1693.37, 1496.27, 1215.94, 802.38, 1536.2, 746.59, 431.12, 190.96, 95.73],
        '2017-04-24': [8482.93, 1860.5, 1493.19, 1172.81, 923.8, 1635.11, 694.62, 457, 164.06, 81.84],
        '2017-04-25': [8694.13, 1887.62, 1474.25, 1155.98, 851.97, 1827.26, 758.28, 463.07, 188.1, 87.6],
        '2017-04-26': [8136.61, 1695.01, 1353.85, 1295.98, 875.55, 1540.58, 665.75, 455.26, 167.47, 87.16]
    }
};

class MockUniqueIdService extends UniqueIdService {
    getUniqueId() {
        return 123456789;
    }
}

describe('ChartComponent', () => {
    let component: ChartComponent;
    let fixture: ComponentFixture<ChartComponent>;
    let debugEl: DebugElement;
    let el: HTMLElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [LoaderModule, ShortNumberScaleSuffixModule, CloneModule],
            declarations: [ChartComponent],
            providers: [
                ColorsService,
                ChartDataService,
                DatePipe,
                CurrencyPipe,
                PercentPipe,
                DecimalPipe,
                ClonePipe,
                ShortNumberScaleSuffixPipe,
                {provide: UniqueIdService, useClass: MockUniqueIdService}
            ]
        });

        fixture = TestBed.createComponent(ChartComponent);
        component = fixture.componentInstance;

        debugEl = fixture.debugElement;
        el = debugEl.nativeElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('Must have class and id attributes', () => {
        component.data = mockRawData;
        fixture.detectChanges();
        const holderEl = debugEl.query(By.css('.canvas-holder'));

        expect(holderEl.nativeElement.getAttribute('class')).toContain('canvas-holder');
        expect(holderEl.nativeElement.getAttribute('id')).toBe('fs-chart-123456789');
    });

    it('Must have <canvas> tag in HTML', () => {
        component.type = ChartType.StackedLine;
        component.data = mockRawData;
        fixture.detectChanges();
        const holderEl = debugEl.query(By.css('.canvas-holder'));

        const inner = holderEl.nativeElement.innerHTML;
        expect(inner).toContain('<canvas');
        expect(inner).toContain('</canvas>');
    });
});
