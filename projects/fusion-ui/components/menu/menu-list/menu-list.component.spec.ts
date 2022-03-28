import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {MenuListComponent} from './menu-list.component';
import {IconModule} from '@ironsource/fusion-ui/components/icon';
import {RouterTestingModule} from '@angular/router/testing';
import {MenuItemComponent} from '../menu-item/menu-item.component';

describe('MenuComponent', () => {
    let component: MenuListComponent;
    let fixture: ComponentFixture<MenuListComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                imports: [IconModule, RouterTestingModule],
                declarations: [MenuListComponent, MenuItemComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(MenuListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
