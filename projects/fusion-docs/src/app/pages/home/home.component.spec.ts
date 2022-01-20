import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeComponent} from './home.component';
import {RouterTestingModule} from '@angular/router/testing';
import {ButtonModule, IconModule} from 'projects/fusion-ui/src/public-api';

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                imports: [RouterTestingModule, ButtonModule, IconModule],
                declarations: [HomeComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
