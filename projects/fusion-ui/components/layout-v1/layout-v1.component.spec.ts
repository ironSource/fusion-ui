import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {HeaderModule} from '@ironsource/fusion-ui/components/header';
import {MenuModule} from '@ironsource/fusion-ui/components/menu';
import {LayoutV1Component} from './layout-v1.component';
import {PopupModule} from '@ironsource/fusion-ui/components/popup';
import {CacheService} from '@ironsource/fusion-ui/services';
import {PopupService} from '@ironsource/fusion-ui/components/popup';
import {RouterTestingModule} from '@angular/router/testing';

describe('LayoutV1Component', () => {
    let component: LayoutV1Component;
    let fixture: ComponentFixture<LayoutV1Component>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                imports: [HeaderModule, MenuModule, PopupModule, RouterTestingModule],
                declarations: [LayoutV1Component],
                providers: [CacheService, PopupService]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(LayoutV1Component);
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
