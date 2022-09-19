import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {TypographyDocsV2Component} from './typography-docs-v2.component';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';

describe('TypographyDocV2Component', () => {
    let component: TypographyDocsV2Component;
    let fixture: ComponentFixture<TypographyDocsV2Component>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [TypographyDocsV2Component],
            imports: [ExampleBlockModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TypographyDocsV2Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
