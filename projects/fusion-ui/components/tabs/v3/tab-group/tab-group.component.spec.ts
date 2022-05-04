import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TabGroupComponent} from './tab-group.component';

describe('TabsComponent', () => {
    let component: TabGroupComponent;
    let fixture: ComponentFixture<TabGroupComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TabGroupComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TabGroupComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
