import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TabComponent} from './tab.component';
import {TabConfiguration} from './tab.entities';
import {TabModule} from './tab.module';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {By} from '@angular/platform-browser';
import {Component, Type} from '@angular/core';

// region MOCKING
const TAB_TEXT_MOCK: TabConfiguration = {
    text: 'tab-text'
};

const TAB_ICON_TEXT_MOCK: TabConfiguration = {
    icon: 'tab-icon-name',
    text: 'tab-text'
};

const TAB_DISABLED_MOCK: TabConfiguration = {
    text: 'tab-text',
    disabled: true
};

const TAB_TOOLTIP_MOCK: TabConfiguration = {
    text: 'tab-text',
    tooltipContent: 'tooltip-content'
};

const TAB_TOOLTIP_ICON_MOCK: TabConfiguration = {
    text: 'tab-text',
    tooltipContent: 'tooltip-content',
    infoIcon: 'icon-info'
};

@Component({
    selector: 'fusion-dummy-components',
    template: 'it a dummy component'
})
export class DummyComponent {}

const TAB_POPUP_MOCK: TabConfiguration = {
    text: 'tab-text',
    popupContent: {
        type: DummyComponent as Type<Component>,
        data: {}
    },
    infoIcon: 'icon-info'
};
// endregion

describe('TabComponent', () => {
    let component: TabComponent;
    let fixture: ComponentFixture<TabComponent>;

    const createComponent = (data?: TabConfiguration) => {
        fixture = TestBed.createComponent(TabComponent);
        component = fixture.componentInstance;
        if (!!data) {
            component.configuration = data;
        }
        fixture.detectChanges();
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TabComponent],
            imports: [TabModule, TooltipModule, IconModule]
        }).compileComponents();
    });

    it('should create', () => {
        createComponent();
        expect(component).toBeTruthy();
    });

    describe('Should render DOM elements', () => {
        it('should render tab with text', () => {
            createComponent({...TAB_TEXT_MOCK});
            expect(component).toBeTruthy();
            const tabEl = fixture.debugElement.query(By.css('.fu-tab'));
            expect(tabEl).toBeTruthy();
            expect(tabEl.nativeElement.querySelector('.fu-tab-text')).toBeTruthy();
            expect(tabEl.nativeElement.querySelector('.fu-tab-text').innerText).toEqual(TAB_TEXT_MOCK.text);
        });

        it('should render tab with icon and text', () => {
            createComponent({...TAB_ICON_TEXT_MOCK});
            expect(component).toBeTruthy();
            const tabEl = fixture.debugElement.query(By.css('.fu-tab'));

            expect(tabEl.nativeElement.querySelector('.fu-tab-icon')).toBeTruthy();
            expect(tabEl.nativeElement.querySelector('.fu-tab-icon').classList).toContain(TAB_ICON_TEXT_MOCK.icon);

            expect(tabEl.nativeElement.querySelector('.fu-tab-text')).toBeTruthy();
            expect(tabEl.nativeElement.querySelector('.fu-tab-text').innerText).toEqual(TAB_ICON_TEXT_MOCK.text);
        });

        it('should render disabled tab', () => {
            createComponent({...TAB_DISABLED_MOCK});
            expect(component).toBeTruthy();
            const tabEl = fixture.debugElement.query(By.css('.fu-tab'));
            expect(tabEl).toBeTruthy();
            expect(tabEl.nativeElement.classList).toContain('fu-tab-disabled');
        });

        it('should render tab with tooltip', () => {
            createComponent({...TAB_TOOLTIP_MOCK});
            expect(component).toBeTruthy();
            const tabEl = fixture.debugElement.query(By.css('.fu-tab'));
            const tabTextEl = tabEl.query(By.css(' .fu-tab-text'));

            expect(tabTextEl).toBeTruthy();
            expect(tabTextEl.attributes.role).toEqual('tooltiped');
            expect(tabTextEl.attributes['ng-reflect-fusion-tooltip']).toEqual(TAB_TOOLTIP_MOCK.tooltipContent);

            expect(tabEl.nativeElement.querySelector('.fu-tab-additional-icon')).not.toBeTruthy();
        });

        it('should render tab with tooltip icon', () => {
            createComponent({...TAB_TOOLTIP_ICON_MOCK});
            expect(component).toBeTruthy();
            const tabEl = fixture.debugElement.query(By.css('.fu-tab'));
            const tabTextEl = tabEl.query(By.css(' .fu-tab-text'));

            expect(tabTextEl).toBeTruthy();
            expect(tabTextEl.attributes.role).not.toBeTruthy();
            expect(tabTextEl.attributes['ng-reflect-fusion-tooltip']).not.toBeTruthy();

            const tabInfoIconEl = tabEl.nativeElement.querySelector('.fu-tab-additional-icon');
            expect(tabInfoIconEl).toBeTruthy();
            expect(tabInfoIconEl.classList).toContain(TAB_TOOLTIP_ICON_MOCK.infoIcon);

            expect(tabInfoIconEl.getAttribute('role')).toEqual('tooltiped');
            expect(tabInfoIconEl.getAttribute('ng-reflect-fusion-tooltip')).toEqual(TAB_TOOLTIP_ICON_MOCK.tooltipContent);
        });

        it('should render tab with popup icon', () => {
            createComponent({...TAB_POPUP_MOCK});
            expect(component).toBeTruthy();
            const tabEl = fixture.debugElement.query(By.css('.fu-tab'));

            const tabInfoIconEl = tabEl.nativeElement.querySelector('.fu-tab-additional-icon');
            expect(tabInfoIconEl).toBeTruthy();
            expect(tabInfoIconEl.classList).toContain(TAB_POPUP_MOCK.infoIcon);
        });
    });

    describe('Should emit events', () => {
        it('should emit event show popup', () => {
            createComponent({...TAB_POPUP_MOCK});
            expect(component).toBeTruthy();
            const tabEl = fixture.debugElement.query(By.css('.fu-tab'));

            const tabInfoIconEl = tabEl.nativeElement.querySelector('.fu-tab-additional-icon');
            expect(tabInfoIconEl).toBeTruthy();

            spyOn(component.showPopup, 'emit');

            tabInfoIconEl.click();

            expect(component.showPopup.emit).toHaveBeenCalledWith({content: TAB_POPUP_MOCK.popupContent, target: component.tabElement});
        });
    });
});
