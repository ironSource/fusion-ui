import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {IconHeaderActionComponent} from './icon-header-action.component';
import {IconModule} from '../icon/icon.module';

describe('IconHeaderActionComponent', () => {
    let component: IconHeaderActionComponent;
    let fixture: ComponentFixture<IconHeaderActionComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                imports: [IconModule],
                declarations: [IconHeaderActionComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(IconHeaderActionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
