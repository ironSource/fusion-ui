/**
 * Created by andyk on 18/05/2017.
 */

import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement, CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy} from '@angular/core';
import {AlertComponent} from './alert.component';

describe('AlertComponent', () => {
    let component: AlertComponent;
    let fixture: ComponentFixture<AlertComponent>;
    let debugEl: DebugElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            declarations: [AlertComponent]
        });

        fixture = TestBed.overrideComponent(AlertComponent, {
            set: {changeDetection: ChangeDetectionStrategy.Default}
        }).createComponent(AlertComponent);

        component = fixture.componentInstance;

        debugEl = fixture.debugElement;

        fixture.detectChanges();
    });

    it('Must exist', () => {
        expect(component).toBeTruthy();
    });

    it('Has default alert type "info" ', () => {
        fixture.detectChanges();
        expect(debugEl.query(By.css('div')).nativeElement.classList).toContain('info');
    });

    it('Has alert type "success" ', () => {
        component.type = 'success';
        fixture.detectChanges();
        expect(debugEl.query(By.css('div')).nativeElement.classList).toContain('success');
    });

    it('Has alert type "warning" ', () => {
        component.type = 'warning';
        fixture.detectChanges();
        expect(debugEl.query(By.css('div')).nativeElement.classList).toContain('warning');
    });

    it('Has alert type "error" ', () => {
        component.type = 'error';
        fixture.detectChanges();
        expect(debugEl.query(By.css('div')).nativeElement.classList).toContain('error');
    });

    it('Can change types ', () => {
        component.type = 'error';
        fixture.detectChanges();
        expect(debugEl.query(By.css('div')).nativeElement.classList).toContain('error');

        component.type = 'warning';
        fixture.detectChanges();
        expect(debugEl.query(By.css('div')).nativeElement.classList).toContain('warning');

        component.type = 'success';
        fixture.detectChanges();
        expect(debugEl.query(By.css('div')).nativeElement.classList).toContain('success');

        component.type = 'info';
        fixture.detectChanges();
        expect(debugEl.query(By.css('div')).nativeElement.classList).toContain('info');
    });

    it('Has  "Don`t show again"', () => {
        component.type = 'success';
        component.showDoNotShowAgainButton = true;
        fixture.detectChanges();
        expect(debugEl.query(By.css('div')).nativeElement.classList).toContain('success');

        expect(debugEl.query(By.css('a'))).toBeTruthy();
        expect(debugEl.query(By.css('a')).nativeElement.innerText).toEqual(`Don't show again`);
    });
});
