import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {IconStatusComponent} from './icon-status.component';
import {TooltipModule} from '../tooltip/tooltip.module';
import {IconModule} from '../icon/icon.module';
import {DebugElement} from '@angular/core';

describe('IconStatusComponent', () => {
    let component: IconStatusComponent;
    let fixture: ComponentFixture<IconStatusComponent>;
    let debugEl: DebugElement;
    let el: HTMLElement;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [IconStatusComponent],
                imports: [TooltipModule, IconModule]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(IconStatusComponent);
        component = fixture.componentInstance;
        debugEl = fixture.debugElement;
        el = debugEl.nativeElement;
    });

    it('should create', () => {
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });

    it(' must be not rendered in color (status) not set', () => {
        fixture.detectChanges();
        expect(component).toBeTruthy();
        const iconEl = el.querySelector('fusion-icon');
        expect(iconEl).toBeNull();
    });

    it(' must be rendered with class color "orange" for status "Pending approval"', () => {
        component.options = {color: 'orange'};
        fixture.detectChanges();
        const iconEl = el.querySelector('span');
        expect(iconEl).toBeTruthy();
        expect(iconEl.classList).toContain('orange');
        expect(iconEl.querySelector('fusion-icon')).toBeTruthy();
    });

    it(' must be rendered with class color "gray" for status "Inactive"', () => {
        component.options = {color: 'gray'};
        fixture.detectChanges();
        const iconEl = el.querySelector('span');
        expect(iconEl).toBeTruthy();
        expect(iconEl.classList).toContain('gray');
        expect(iconEl.querySelector('fusion-icon')).toBeTruthy();
    });

    it(' must be rendered with class color "green" for status "Live"', () => {
        component.options = {color: 'green'};
        fixture.detectChanges();
        const iconEl = el.querySelector('span');
        expect(iconEl).toBeTruthy();
        expect(iconEl.classList).toContain('green');
        expect(iconEl.querySelector('fusion-icon')).toBeTruthy();
    });

    it(' must be rendered with class color "red" for status "Daily capped", etc....', () => {
        component.options = {color: 'red'};
        fixture.detectChanges();
        const iconEl = el.querySelector('span');
        expect(iconEl).toBeTruthy();
        expect(iconEl.classList).toContain('red');
        expect(iconEl.querySelector('fusion-icon')).toBeTruthy();
    });
});
