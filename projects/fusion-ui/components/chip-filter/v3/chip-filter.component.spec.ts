import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {ChipFilterComponent} from '@ironsource/fusion-ui/components/chip-filter';
import {TooltipModule, IconModule, FlagModule} from '@ironsource/fusion-ui';
import {By} from '@angular/platform-browser';
import {Component, DebugElement, Input, TemplateRef} from '@angular/core';
import {ChipFilterComponentConfigurations, ChipFilterType, ChipType} from '@ironsource/fusion-ui/components/chip-filter/common/base';

const innerText = 'Test Chip';

@Component({
    template: `<fusion-chip-filter [configuration]="config">
        <div class="fu-chip-content">${innerText}</div>
    </fusion-chip-filter>`
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
            component.config = {id: 1, type: 'dynamic'};
            fixture.detectChanges();
            expect(chipEl).toBeTruthy();

            chipElement.dispatchEvent(new Event('click'));
            fixture.detectChanges();
            expect(collectionToArray(chipElement.classList)).toEqual(['fu-selected', 'closed-icon', 'fu-removable-filter']);

            const iconClose = chipEl.query(By.css('fusion-icon')).nativeElement.classList;
            expect(iconClose).toContain('fu-icon-close');
        });

        it('should create DateFilter type', async () => {
            component.config = {id: 1, type: 'static'};
            fixture.detectChanges();
            expect(chipEl).toBeTruthy();
            chipElement.dispatchEvent(new Event('click'));
            fixture.detectChanges();
            expect(collectionToArray(chipElement.classList)).toEqual(['fu-selected', 'fu-un-removable-filter']);
        });
        //
        //     it('should create AddFilter type', async () => {
        //         component.type = 'add';
        //         fixture.detectChanges();
        //         expect(chipEl).toBeTruthy();
        //         expect(collectionToArray(chipElement.classList)).toEqual(['fu-add-filter']);
        //     });
        //
        it('should create ChipFilter type', async () => {
            component.config = {id: 1, type: 'static'};
            fixture.detectChanges();
            expect(chipEl).toBeTruthy();
            expect(collectionToArray(chipElement.classList)).toEqual(['fu-chip-filter']);
        });

        it('should create Disabled Chip type', async () => {
            component.config = {id: 1, disabled: true, type: 'static'};
            fixture.detectChanges();
            expect(chipEl).toBeTruthy();
            expect(collectionToArray(chipElement.classList)).toContain('fu-disabled');
        });
    });
});
