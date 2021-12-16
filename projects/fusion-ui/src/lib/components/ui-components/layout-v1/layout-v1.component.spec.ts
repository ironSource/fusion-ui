import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {HeaderModule} from '../header/header.module';
import {MenuModule} from '../menu/menu.module';
import {LayoutV1Component} from './layout-v1.component';
import {PopupModule} from '../popup/popup.module';
import {CacheService} from '../../../services/cache/cache.service';
import {PopupService} from '../popup/popup.service';
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
