import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {TagsInputComponent} from './tags-input.component';
import {TagModule} from '../../tag/tag.module';
import {IconModule} from '../../icon/icon.module';
import {InputModule} from '../../input/input.module';
import {DropdownOptionModule} from '../dropdown-option/dropdown-option.module';
import {DropdownLoaderModule} from '../dropdown-loader/dropdown-loader.module';
import {ReactiveFormsModule} from '@angular/forms';
import {ClickOutsideModule} from '../../../../directives/click-outside/click-outside.module';
import {FilterByFieldPipe} from '../../../../pipes/collection/filter-by-field/filter-by-field.pipe';
import {ClonePipe} from '../../../../pipes/clone/clone.pipe';
import {DropdownOptionsListModule} from '../dropdown-options-list/dropdown-options-list.module';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

const MOCK_TAGLIST_OPTIONS = [
    'Art & Design',
    'Beauty',
    'Books & Reference',
    'Education',
    'Entertainment',
    'Events',
    'Finance',
    'Food & Drink',
    'Health & Fitness',
    'House & Home',
    'Libraries & Demo',
    'Lifestyle',
    'Maps & Navigation',
    'Medical',
    'Music & Audio',
    'News & Magazines',
    'Parenting'
];

describe('TagsInputComponent', () => {
    let component: TagsInputComponent;
    let fixture: ComponentFixture<TagsInputComponent>;
    let debugEl: DebugElement;
    let el: HTMLElement;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                imports: [
                    ReactiveFormsModule,
                    TagModule,
                    IconModule,
                    InputModule,
                    DropdownOptionModule,
                    DropdownLoaderModule,
                    ClickOutsideModule,
                    DropdownOptionsListModule
                ],
                declarations: [TagsInputComponent],
                providers: [FilterByFieldPipe, ClonePipe]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(TagsInputComponent);
        component = fixture.componentInstance;
        component.tagList = MOCK_TAGLIST_OPTIONS;
        fixture.detectChanges();
        debugEl = fixture.debugElement;
        el = debugEl.nativeElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('Must have tags-holder DOM Element', () => {
        expect(fixture.debugElement.query(By.css('.is-tags-holder'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('ul.tags-holder'))).toBeTruthy();
    });

    it('Must have option list DOM Element', () => {
        expect(fixture.debugElement.query(By.css('.options-dropdown'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.options-holder'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('ul.options'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('li.option'))).toBeTruthy();
    });

    it('Must render first 10 option to list DOM Element', () => {
        const optionsHolderEl = fixture.debugElement.query(By.css('ul.options')).nativeElement;
        const optionsEl = optionsHolderEl.querySelectorAll('li.option');
        expect(optionsEl.length).toBe(10);
        [...optionsEl].forEach((el, idx) => {
            expect(el.textContent.trim()).toBe(MOCK_TAGLIST_OPTIONS[idx].trim());
        });
    });

    describe('TagsInput Footer', () => {
        beforeEach(() => {
            component = fixture.componentInstance;
            component.tagList = MOCK_TAGLIST_OPTIONS;
            component.footer = true;
            fixture.detectChanges();
            debugEl = fixture.debugElement;
            el = debugEl.nativeElement;
        });

        it('should has footer DOM elements', () => {
            expect(fixture.debugElement.query(By.css('.is-footer'))).toBeTruthy();
        });

        it('footer should have "Apply" button', () => {
            expect(fixture.debugElement.query(By.css('.is-footer button.primary'))).toBeTruthy();
            expect(fixture.debugElement.query(By.css('.is-footer button.primary')).nativeElement.classList).toContain('small');
            expect(fixture.debugElement.query(By.css('.is-footer button.primary')).nativeElement.classList).toContain('transparent');
            expect(fixture.debugElement.query(By.css('.is-footer button.primary')).nativeElement.textContent).toBe('Apply');
        });

        it('footer should have "Cancel" button', () => {
            expect(fixture.debugElement.query(By.css('.is-footer button.secondary'))).toBeTruthy();
            expect(fixture.debugElement.query(By.css('.is-footer button.secondary')).nativeElement.textContent).toBe('Cancel');
            expect(fixture.debugElement.query(By.css('.is-footer button.secondary')).nativeElement.classList).toContain('small');
            expect(fixture.debugElement.query(By.css('.is-footer button.secondary')).nativeElement.classList).toContain('transparent');
        });

        it('footer should have "Clear" button if set with default text', () => {
            component.footer = {clearAll: true};
            component.tagList = MOCK_TAGLIST_OPTIONS;
            fixture.detectChanges();

            expect(fixture.debugElement.query(By.css('.is-footer a.button-clear'))).toBeTruthy();
            expect(fixture.debugElement.query(By.css('.is-footer a.button-clear')).nativeElement.textContent).toBe('Clear selection');
        });

        it('footer should have "Clear" button if set with custom text', () => {
            component.footer = {clearAll: 'remove all'};
            component.tagList = MOCK_TAGLIST_OPTIONS;
            fixture.detectChanges();

            expect(fixture.debugElement.query(By.css('.is-footer a.button-clear'))).toBeTruthy();
            expect(fixture.debugElement.query(By.css('.is-footer a.button-clear')).nativeElement.textContent).toBe('remove all');
        });
    });
});
