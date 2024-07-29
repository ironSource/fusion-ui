import {ComponentFixture, TestBed} from '@angular/core/testing';
import {EmptyStateComponent} from './empty-state.component';

const DEFAULT_ICON_SELECTOR: string = 'fusion-icon.fu-empty-state-icon.ghost';
const CONTENT_SELECTOR: string = 'div.fu-empty-state-content';
const TITLE_SELECTOR: string = 'div.fu-empty-state-title';
const TITLE_TEXT: string = 'Empty State Title';
const DESCRIPTION_SELECTOR: string = 'div.fu-empty-state-description';
const DESCRIPTION_TEXT: string = 'Empty State Description';

describe('EmptyStateComponent', () => {
    let component: EmptyStateComponent;
    let fixture: ComponentFixture<EmptyStateComponent>;
    let el: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [EmptyStateComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(EmptyStateComponent);
        component = fixture.componentInstance;
        component.title = TITLE_TEXT.trim();
        component.description = DESCRIPTION_TEXT.trim();
        fixture.detectChanges();
        el = fixture.nativeElement;
    });

    it('should create', () => {
        expect(component).toBeDefined();
    });

    it('must have default icon', () => {
        expect(el.querySelector(DEFAULT_ICON_SELECTOR)).toBeTruthy();
    });

    it('by default have no content', () => {
        const contentEl = el.querySelector(CONTENT_SELECTOR);
        expect(contentEl).toBeTruthy();
        expect(contentEl.textContent).toBe('');
    });

    it('must render title', () => {
        const contentEl = el.querySelector(TITLE_SELECTOR);
        expect(contentEl).toBeTruthy();
        expect(contentEl.textContent).toBe(TITLE_TEXT);
    });

    it('must render description', () => {
        const contentEl = el.querySelector(DESCRIPTION_SELECTOR);
        expect(contentEl).toBeTruthy();
        expect(contentEl.textContent).toBe(DESCRIPTION_TEXT);
    });

    describe('Must render illustrate instead icon', () => {
        it('illustrate "error"', () => {
            fixture = TestBed.createComponent(EmptyStateComponent);
            component = fixture.componentInstance;
            component.type = 'error';
            fixture.detectChanges();
            el = fixture.nativeElement;
            expect(el.querySelector('div.fu-empty-state-image')).toBeTruthy();
            expect(el.querySelector('fusion-svg').getAttribute('path')).toBe('assets/images/v4/illustrations/error.svg');
        });

        it('illustrate "accessDenied"', () => {
            fixture = TestBed.createComponent(EmptyStateComponent);
            component = fixture.componentInstance;
            component.type = 'accessDenied';
            fixture.detectChanges();
            el = fixture.nativeElement;
            expect(el.querySelector('div.fu-empty-state-image')).toBeTruthy();
            expect(el.querySelector('fusion-svg').getAttribute('path')).toBe('assets/images/v4/illustrations/access-denied.svg');
        });

        it('illustrate "noResult"', () => {
            fixture = TestBed.createComponent(EmptyStateComponent);
            component = fixture.componentInstance;
            component.type = 'noResult';
            fixture.detectChanges();
            el = fixture.nativeElement;
            expect(el.querySelector('div.fu-empty-state-image')).toBeTruthy();
            expect(el.querySelector('fusion-svg').getAttribute('path')).toBe('assets/images/v4/illustrations/no-result.svg');
        });

        it('illustrate "noData"', () => {
            fixture = TestBed.createComponent(EmptyStateComponent);
            component = fixture.componentInstance;
            component.type = 'noData';
            fixture.detectChanges();
            el = fixture.nativeElement;
            expect(el.querySelector('div.fu-empty-state-image')).toBeTruthy();
            expect(el.querySelector('fusion-svg').getAttribute('path')).toBe('assets/images/v4/illustrations/no-data.svg');
        });

        it('illustrate "chart"', () => {
            fixture = TestBed.createComponent(EmptyStateComponent);
            component = fixture.componentInstance;
            component.type = 'chart';
            fixture.detectChanges();
            el = fixture.nativeElement;
            expect(el.querySelector('div.fu-empty-state-image')).toBeTruthy();
            expect(el.querySelector('fusion-svg').getAttribute('path')).toBe('assets/images/v4/illustrations/chart.svg');
        });

        it('illustrate "files"', () => {
            fixture = TestBed.createComponent(EmptyStateComponent);
            component = fixture.componentInstance;
            component.type = 'files';
            fixture.detectChanges();
            el = fixture.nativeElement;
            expect(el.querySelector('div.fu-empty-state-image')).toBeTruthy();
            expect(el.querySelector('fusion-svg').getAttribute('path')).toBe('assets/images/v4/illustrations/files.svg');
        });

        it('illustrate "settings"', () => {
            fixture = TestBed.createComponent(EmptyStateComponent);
            component = fixture.componentInstance;
            component.type = 'settings';
            fixture.detectChanges();
            el = fixture.nativeElement;
            expect(el.querySelector('div.fu-empty-state-image')).toBeTruthy();
            expect(el.querySelector('fusion-svg').getAttribute('path')).toBe('assets/images/v4/illustrations/settings-exclamation.svg');
        });
    });
});
