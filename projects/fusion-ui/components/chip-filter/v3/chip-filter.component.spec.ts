import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {ChipFilterComponent} from '@ironsource/fusion-ui/components/chip-filter';
import {TooltipModule, IconModule, FlagModule} from '@ironsource/fusion-ui';
import {By} from '@angular/platform-browser';
import {Component, DebugElement, Input, TemplateRef} from '@angular/core';
import {ChipFilterComponentConfigurations, ChipType} from '@ironsource/fusion-ui/components/chip-filter/common/base';

const innerText = 'Test Chip';

@Component({
    selector: 'fusion-trigger',
    template: `<ng-container [ngTemplateOutlet]="templateRef"></ng-container>`
})
class TriggerComponent {
    templateRef: TemplateRef<any>;
}

@Component({
    template: `<fusion-chip-filter [chipFilterType]="type" [configuration]="config">
        <div class="fu-chip-content">${innerText}</div>
        <div class="filter-element">
            <fusion-trigger></fusion-trigger>
        </div>
    </fusion-chip-filter>`
})
class TestChipComponent {
    @Input() config: ChipFilterComponentConfigurations;
    @Input() type: ChipType;
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
            component.type = 'RemoveAbleSelect';
            fixture.detectChanges();
            expect(chipEl).toBeTruthy();
            expect(collectionToArray(chipElement.classList)).toEqual(['closed-icon', 'fu-removable-filter']);

            component.type = 'RemoveAbleSelect';
            fixture.detectChanges();
            expect(chipEl).toBeTruthy();
            expect(collectionToArray(chipElement.classList)).toContain('fu-removable-filter');
        });

        it('should create DateFilter type', async () => {
            component.type = 'UnRemoveAbleSelect';
            fixture.detectChanges();
            expect(chipEl).toBeTruthy();
            expect(collectionToArray(chipElement.classList)).toEqual(['fu-un-removable-filter']);
        });

        it('should create AddFilter type', async () => {
            component.type = 'AddFilter';
            fixture.detectChanges();
            expect(chipEl).toBeTruthy();
            expect(collectionToArray(chipElement.classList)).toEqual(['fu-add-filter']);
        });

        it('should create ChipDropdown type', async () => {
            component.type = 'ChipDropdown';
            fixture.detectChanges();
            expect(chipEl).toBeTruthy();
            expect(collectionToArray(chipElement.classList)).toEqual(['fu-chip-dropdown']);
        });

        it('should create Disabled Chip type', async () => {
            component.config = {disabled: true};
            component.type = 'ChipDropdown';
            fixture.detectChanges();
            expect(chipEl).toBeTruthy();
            expect(collectionToArray(chipElement.classList)).toContain('fu-disabled');
        });
    });
});
