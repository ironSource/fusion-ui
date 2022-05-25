import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {HeaderModule} from '@ironsource/fusion-ui/components/header';
import {MenuModule} from '@ironsource/fusion-ui/components/menu';
import {LayoutComponent} from './layout.component';
import {PopupModule} from '@ironsource/fusion-ui/components/popup';
import {CacheService} from '@ironsource/fusion-ui/services/cache';
import {PopupService} from '@ironsource/fusion-ui/components/popup/common/services';
import {RouterTestingModule} from '@angular/router/testing';

describe('LayoutComponent', () => {
    let component: LayoutComponent;
    let fixture: ComponentFixture<LayoutComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                imports: [HeaderModule, MenuModule, PopupModule, RouterTestingModule],
                declarations: [LayoutComponent],
                providers: [CacheService, PopupService]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(LayoutComponent);
        component = fixture.componentInstance;
        component.state = {};
        component.menuItems = [];
        component.headerPrimaryMenuItems = [];
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
