import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {ExampleBlockComponent} from './example-block.component';
import {IconModule} from '@ironsource/fusion-uifusion-ui';

describe('ExampleBlockComponent', () => {
    let component: ExampleBlockComponent;
    let fixture: ComponentFixture<ExampleBlockComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [ExampleBlockComponent],
                imports: [IconModule]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(ExampleBlockComponent);
        component = fixture.componentInstance;
        component.title = 'TEST';
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
