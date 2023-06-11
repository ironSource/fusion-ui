import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {HeaderComponent} from './header.component';
import {DynamicComponentsModule} from '@ironsource/fusion-ui/components/dynamic-components/v1';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {RouterModule} from '@angular/router';
import {Observable, of} from 'rxjs';
import {TruncatePipe} from "@ironsource/fusion-ui/pipes/string";


describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [HeaderComponent],
            imports: [DynamicComponentsModule, IconModule, RouterModule, TruncatePipe]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
