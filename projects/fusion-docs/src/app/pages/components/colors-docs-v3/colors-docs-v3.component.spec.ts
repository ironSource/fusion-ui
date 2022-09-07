import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {ColorsDocsV3Component} from './colors-docs-v3.component';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';

describe('ColorsDocsV2Component', () => {
    let component: ColorsDocsV3Component;
    let fixture: ComponentFixture<ColorsDocsV3Component>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ColorsDocsV3Component],
            imports: [ExampleBlockModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ColorsDocsV3Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
