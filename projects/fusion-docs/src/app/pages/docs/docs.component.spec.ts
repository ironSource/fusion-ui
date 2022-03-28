import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocsComponent} from './docs.component';
import {LayoutV1Module, LayoutModule} from '@ironsource/fusion-ui';
import {RouterTestingModule} from '@angular/router/testing';
import {StyleVersionButtonModule} from '../../components/style-version-button/style-version-button.module';
import {MenuItemExampleModule} from '../../components/menu-item-example/menu-item-example.module';

describe('DocsComponent', () => {
    let component: DocsComponent;
    let fixture: ComponentFixture<DocsComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                imports: [
                    RouterTestingModule,
                    LayoutV1Module.forRoot({svgOptions: {assetsPath: ''}}),
                    LayoutModule.forRoot({svgOptions: {assetsPath: ''}}),
                    StyleVersionButtonModule,
                    MenuItemExampleModule
                ],
                declarations: [DocsComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(DocsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
