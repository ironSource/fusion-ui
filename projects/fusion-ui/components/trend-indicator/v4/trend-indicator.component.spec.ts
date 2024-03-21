import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TrendIndcatorComponent} from './trend-indicator.component';

describe('TrendIndcatorComponent', () => {
    let component: TrendIndcatorComponent;
    let fixture: ComponentFixture<TrendIndcatorComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TrendIndcatorComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(TrendIndcatorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
