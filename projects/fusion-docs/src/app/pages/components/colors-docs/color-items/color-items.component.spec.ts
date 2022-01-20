import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {ColorItemsComponent} from './color-items.component';
import {ExampleBlockModule} from '../../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../../components/docs-menu/docs-menu.module';
import {ButtonModule} from '@ironsource/fusion-ui';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

describe('ColorItemsComponent', () => {
    let component: ColorItemsComponent;
    let fixture: ComponentFixture<ColorItemsComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [ColorItemsComponent],
                imports: [ExampleBlockModule, CodeBlockModule, DocsMenuModule, ButtonModule, RouterModule, ReactiveFormsModule]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(ColorItemsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
