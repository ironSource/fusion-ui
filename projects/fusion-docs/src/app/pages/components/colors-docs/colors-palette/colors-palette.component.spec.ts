import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {ColorsPaletteComponent} from './colors-palette.component';
import {ExampleBlockModule} from '../../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../../components/docs-menu/docs-menu.module';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {ButtonModule} from '@ironsource/fusion-ui/components/button/v2';

describe('ColorsPaletteComponent', () => {
    let component: ColorsPaletteComponent;
    let fixture: ComponentFixture<ColorsPaletteComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [ColorsPaletteComponent],
                imports: [ExampleBlockModule, CodeBlockModule, DocsMenuModule, ButtonModule, RouterModule, ReactiveFormsModule]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(ColorsPaletteComponent);
        component = fixture.componentInstance;
        component.colorPalette = {className: '', color: [], name: ''};
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
