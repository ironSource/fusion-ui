import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TrendIndicatorComponent} from './trend-indicator.component';

describe('TrendIndicatorComponent', () => {
    let component: TrendIndicatorComponent;
    let fixture: ComponentFixture<TrendIndicatorComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TrendIndicatorComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(TrendIndicatorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
