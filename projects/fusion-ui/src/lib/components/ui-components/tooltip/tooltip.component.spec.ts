/**
 * Created by andyk on 21/05/2017.
 */

import {ComponentFixture, TestBed} from '@angular/core/testing';
// import { By } from '@angular/platform-browser';
import {Component, DebugElement, ElementRef} from '@angular/core';

import {TooltipDirective} from './tooltip.directive';
import {WindowService} from '../../../services/window/window.service';
import {TooltipComponent} from './tooltip.component';
import {TooltipService} from './tooltip.service';
import {DynamicComponentsModule} from '../dynamic-components/dynamic-components.module';
import {CacheService} from '../../../services/cache/cache.service';
import {IconModule} from '../icon/icon.module';
import {MouseEvent} from 'react';
import {Observable, of} from 'rxjs';

const TEXT = 'Basjn asd ioj as djo j asoi jasjdasd jp';

class MockTooltipService {
    el: ElementRef;
    redirectToPage(): Promise<boolean> {
        return new Promise(resolve => resolve(true));
    }
    getMouseHoverObservable(): Observable<MouseEvent> {
        return of({} as MouseEvent);
    }
    showTooltip(tooltipData?: any) {}
    closeTooltip() {}
    isElementVisible() {}
}

// do dummy component - holder
@Component({
    template: ` <div [fusionTooltip]="text">{{ text }}</div> `
})
class TestTooltipComponent {
    public text = TEXT;
}

describe('ToolTipComponent', () => {
    let component: TestTooltipComponent;
    let fixture: ComponentFixture<TestTooltipComponent>;
    let debugEl: DebugElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestTooltipComponent, TooltipComponent, TooltipDirective],
            imports: [DynamicComponentsModule, IconModule],
            providers: [WindowService, CacheService, {provide: TooltipService, useClass: MockTooltipService}]
        });

        fixture = TestBed.createComponent(TestTooltipComponent);

        component = fixture.componentInstance;

        debugEl = fixture.debugElement;
        fixture.detectChanges();
    });

    // todo: uncomment when finding how to trigger hover event
    // it('is-tooltip component should be added on hover', () => {
    //     debugEl.triggerEventHandler('mouseover', true);
    //     expect(debugEl.query(By.css('is-tooltip')).nativeElement.innerHTML).toBe(`<span>${TEXT}</span>`);
    //
    // });

    it('Must have empty title attribute', () => {
        const isEmptyTitle = !debugEl.nativeElement.attributes.title || !debugEl.nativeElement.attributes.title.nodeValue ? true : false;
        expect(isEmptyTitle).toBe(true);
    });
});
