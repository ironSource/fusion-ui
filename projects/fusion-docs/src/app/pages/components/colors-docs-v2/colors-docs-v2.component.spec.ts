import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {ColorsDocsV2Component} from './colors-docs-v2.component';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';

describe('ColorsDocsV2Component', () => {
    let component: ColorsDocsV2Component;
    let fixture: ComponentFixture<ColorsDocsV2Component>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ColorsDocsV2Component],
            imports: [ExampleBlockModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ColorsDocsV2Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
