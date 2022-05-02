import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {ChipFilterComponent} from '@ironsource/fusion-ui/components/chip-filter';
import {TooltipModule, IconModule, FlagModule} from '@ironsource/fusion-ui';
import {By} from '@angular/platform-browser';
import {Component, DebugElement, Input} from '@angular/core';
import {ChipFilterComponentConfigurations} from '@ironsource/fusion-ui/components/chip-filter/common/base';

const innerText = 'Test Chip';

@Component({
    template: `<fusion-chip-filter [configuration]="config">${innerText}</fusion-chip-filter>`
})
class TestChipComponent {
    @Input() config: ChipFilterComponentConfigurations;
}

export const collectionToArray = (el: any) => [].slice.call(el);

describe('ChipFilterComponent', () => {
    let component: TestChipComponent;
    let fixture: ComponentFixture<TestChipComponent>;
    let debugEl: DebugElement;
    let chipEl: DebugElement;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                imports: [IconModule, FlagModule, TooltipModule],
                declarations: [ChipFilterComponent, TestChipComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(TestChipComponent);
        component = fixture.componentInstance;
        debugEl = fixture.debugElement;
        chipEl = debugEl.query(By.css('fusion-chip-filter'));
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('should check ChipFilter types', () => {
        let chipElement;
        beforeEach(() => {
            chipElement = chipEl.nativeElement;
        });

        it('should create ChipSelect type', async () => {
            component.config = {type: 'ChipSelect', close: true};
            fixture.detectChanges();
            expect(chipEl).toBeTruthy();
            expect(collectionToArray(chipElement.classList)).toEqual(['closed-icon', 'fu-chip-select']);

            const iconClose = chipEl.query(By.css('fusion-icon')).nativeElement.classList;
            expect(iconClose).toContain('fu-icon-close');

            component.config = {type: 'ChipSelect'};
            fixture.detectChanges();
            expect(chipEl).toBeTruthy();
            expect(collectionToArray(chipElement.classList)).toContain('fu-chip-select');
        });

        it('should create DateFilter type', async () => {
            component.config = {type: 'DateFilter'};
            fixture.detectChanges();
            expect(chipEl).toBeTruthy();
            expect(collectionToArray(chipElement.classList)).toEqual(['fu-date-filter']);
        });

        it('should create AddFilter type', async () => {
            component.config = {type: 'AddFilter'};
            fixture.detectChanges();
            expect(chipEl).toBeTruthy();
            expect(collectionToArray(chipElement.classList)).toEqual(['fu-add-filter']);
        });

        it('should create ChipDropdown type', async () => {
            component.config = {type: 'ChipDropdown'};
            fixture.detectChanges();
            expect(chipEl).toBeTruthy();
            expect(collectionToArray(chipElement.classList)).toEqual(['fu-chip-dropdown']);
        });

        it('should create Disabled Chip type', async () => {
            component.config = {type: 'ChipDropdown', disabled: true};
            fixture.detectChanges();
            expect(chipEl).toBeTruthy();
            expect(collectionToArray(chipElement.classList)).toContain('fu-disabled');
        });
    });
});
