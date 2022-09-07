import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {WrapperComponent} from './wrapper.component';
import {ReactiveFormsModule} from '@angular/forms';
import {WRAPPER_TOKEN} from './wrapper-entities';
import {ButtonModule} from '@ironsource/fusion-ui/components/button';
import {ButtonComponent} from '@ironsource/fusion-ui/components/button';

describe('WrapperComponent', () => {
    let component: WrapperComponent;
    let fixture: ComponentFixture<WrapperComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, ButtonModule],
            declarations: [WrapperComponent],
            providers: [
                {
                    provide: WRAPPER_TOKEN,
                    useValue: {
                        component: ButtonComponent
                    }
                }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WrapperComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
