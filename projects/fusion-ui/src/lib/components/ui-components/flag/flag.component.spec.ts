import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {FlagComponent} from './flag.component';

describe('FlagsComponent', () => {
    let component: FlagComponent;
    let fixture: ComponentFixture<FlagComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [FlagComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(FlagComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
