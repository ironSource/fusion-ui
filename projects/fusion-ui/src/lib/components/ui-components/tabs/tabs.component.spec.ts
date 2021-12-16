import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TabsComponent} from './tabs.component';
import {TabsConfiguration} from './tabs.entities';
import {TabModule} from './tab/tab.module';
import {TabConfiguration} from './tab/tab.entities';

// region MOCKING
const TABS_ICON_TEXT_BASE_MOCK: TabsConfiguration = {
    tabs: [
        {
            icon: 'alarm-clock',
            text: 'Johannesburg'
        },
        {
            icon: 'company',
            text: 'Springfield'
        },
        {
            icon: 'calendar',
            text: 'Xian'
        },
        {
            icon: 'chart-line',
            text: 'Milwaukee',
            disabled: true
        }
    ]
};
// endregion

describe('TabsComponent', () => {
    let component: TabsComponent;
    let fixture: ComponentFixture<TabsComponent>;

    const createComponent = (data?: TabsConfiguration, selected?: TabConfiguration) => {
        fixture = TestBed.createComponent(TabsComponent);
        component = fixture.componentInstance;
        if (!!data) {
            component.configuration = data;
        }
        if (!!selected) {
            component.selected = selected;
        }
        fixture.detectChanges();
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TabsComponent],
            imports: [TabModule]
        }).compileComponents();
    });

    it('should create', () => {
        createComponent();
        expect(component).toBeTruthy();
    });

    describe('Should render DOM elements', () => {
        it('should create tabs holder', () => {
            createComponent({...TABS_ICON_TEXT_BASE_MOCK});
            const tabsHolder = fixture.debugElement.nativeElement.querySelector('.fu-tabs-holder');
            expect(tabsHolder).toBeTruthy();
        });

        it('should render tab components in  tabs holder', () => {
            createComponent({...TABS_ICON_TEXT_BASE_MOCK});
            const tabsHolder = fixture.debugElement.nativeElement.querySelector('.fu-tabs-holder');
            expect(tabsHolder.querySelectorAll('fusion-tab').length).toEqual(TABS_ICON_TEXT_BASE_MOCK.tabs.length);
        });

        it('should render tab components in tabs holder with icon position up', () => {
            createComponent({...TABS_ICON_TEXT_BASE_MOCK, ...{verticalDisplay: true}});
            const tabsHolder = fixture.debugElement.nativeElement.querySelector('.fu-tabs-holder');
            const tabsEls = tabsHolder.querySelectorAll('fusion-tab');
            tabsEls.forEach(tabEl => {
                expect(tabEl.classList).toContain('fu-tab-icon-up');
            });
        });

        it('should render selected tab component', () => {
            createComponent({...TABS_ICON_TEXT_BASE_MOCK}, TABS_ICON_TEXT_BASE_MOCK.tabs[1]);
            const tabsHolder = fixture.debugElement.nativeElement.querySelector('.fu-tabs-holder');
            expect(tabsHolder.querySelectorAll('fusion-tab').length).toEqual(TABS_ICON_TEXT_BASE_MOCK.tabs.length);

            component.selected = TABS_ICON_TEXT_BASE_MOCK[1];
            fixture.detectChanges();

            const tabsEls = tabsHolder.querySelectorAll('fusion-tab');
            expect(tabsEls[1].classList).toContain('fu-tab-selected');
        });
    });
    describe('Should emit events', () => {
        it('should emit event selectedChange by tab clicked', () => {
            const tabToSelectIndex = 2;
            createComponent({...TABS_ICON_TEXT_BASE_MOCK});
            spyOn(component.selectedChange, 'emit');

            const tabsHolder = fixture.debugElement.nativeElement.querySelector('.fu-tabs-holder');
            const tabsEls = tabsHolder.querySelectorAll('fusion-tab');

            tabsEls[tabToSelectIndex].click();

            expect(component.selectedChange.emit).toHaveBeenCalledWith(TABS_ICON_TEXT_BASE_MOCK.tabs[tabToSelectIndex]);
        });
    });
});
