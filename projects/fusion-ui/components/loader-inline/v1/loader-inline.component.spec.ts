import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {LoaderInlineComponent} from './loader-inline.component';
import {Observable, of} from 'rxjs';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';

describe('LoaderInlineComponent', () => {
    let component: LoaderInlineComponent;
    let fixture: ComponentFixture<LoaderInlineComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [LoaderInlineComponent],
            imports: [IconModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoaderInlineComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
