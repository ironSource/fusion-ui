import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {ChipFilterComponent} from '@ironsource/fusion-ui/components/chip-filter';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {FlagModule} from '@ironsource/fusion-ui/components/flag/v1';
import {By} from '@angular/platform-browser';
import {Component, DebugElement, Input} from '@angular/core';
import {ChipFilterComponentConfigurations} from '@ironsource/fusion-ui/components/chip-filter/common/base';
import {GenericPipe} from "@ironsource/fusion-ui/pipes/generic";

const innerText = 'Test Chip';

@Component({
    template: `<fusion-chip-filter [configuration]="chipConfig">
        <div class="fu-chip-content">${innerText}</div>
    </fusion-chip-filter>`
})
class TestChipComponent {
    chipConfig: ChipFilterComponentConfigurations;
    @Input() set config(value: ChipFilterComponentConfigurations) {
        this.chipConfig = value;
    }
}

export const collectionToArray = (el: any) => [].slice.call(el);

describe('ChipFilterComponent', () => {
    let component: TestChipComponent;
    let fixture: ComponentFixture<TestChipComponent>;
    let debugEl: DebugElement;
    let chipEl: DebugElement;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [IconModule, FlagModule, TooltipModule, GenericPipe],
            declarations: [ChipFilterComponent, TestChipComponent]
        }).compileComponents();
    }));

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

        it('should create chip select removable type', async () => {
            component.config = {id: 1, mode: 'static', close: true};
            fixture.detectChanges();
            expect(chipEl).toBeTruthy();

            chipElement.dispatchEvent(new Event('click'));
            fixture.detectChanges();
            expect(collectionToArray(chipElement.classList)).toEqual(['closed-icon', 'fu-selected', 'fu-removable-filter']);

            const iconClose = chipEl.query(By.css('fusion-icon')).nativeElement.classList;
            expect(iconClose).toContain('fu-icon-close');
        });

        it('should create chip select un removable type', async () => {
            component.config = {id: 1, mode: 'static'};
            fixture.detectChanges();
            expect(chipEl).toBeTruthy();
            chipElement.dispatchEvent(new Event('click'));
            fixture.detectChanges();
            expect(collectionToArray(chipElement.classList)).toEqual(['fu-selected', 'fu-un-removable-filter']);
        });

        it('should create AddFilter type', async () => {
            component.config = {id: 1, mode: 'add'};
            fixture.detectChanges();
            expect(chipEl).toBeTruthy();
            expect(collectionToArray(chipElement.classList)).toEqual(['fu-add-filter']);
        });

        it('should create ChipFilter type', async () => {
            component.config = {id: 1, mode: 'static'};
            fixture.detectChanges();
            expect(chipEl).toBeTruthy();
            expect(collectionToArray(chipElement.classList)).toEqual(['fu-chip-filter']);
        });

        it('should create Disabled Chip type', async () => {
            component.config = {id: 1, disabled: true, mode: 'static'};
            fixture.detectChanges();
            expect(chipEl).toBeTruthy();
            expect(collectionToArray(chipElement.classList)).toContain('fu-disabled');
        });
    });
});
