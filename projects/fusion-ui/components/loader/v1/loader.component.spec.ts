import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {LoaderComponent} from './loader.component';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {Observable, of} from 'rxjs';

describe('LoaderComponent', () => {
    let component: LoaderComponent;
    let fixture: ComponentFixture<LoaderComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [LoaderComponent],
            imports: [IconModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
