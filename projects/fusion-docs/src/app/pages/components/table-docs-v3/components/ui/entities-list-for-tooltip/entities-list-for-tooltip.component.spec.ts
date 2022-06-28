import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EntitiesListForTooltipComponent} from './entities-list-for-tooltip.component';

describe('EntitiesListForTooltipComponent', () => {
    let component: EntitiesListForTooltipComponent;
    let fixture: ComponentFixture<EntitiesListForTooltipComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [EntitiesListForTooltipComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(EntitiesListForTooltipComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
