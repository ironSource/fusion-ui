import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {DropdownLoaderComponent} from './dropdown-loader.component';
import {LoaderInlineModule} from '../../loader-inline/loader-inline.module';

describe('DropdownLoaderComponent', () => {
    let component: DropdownLoaderComponent;
    let fixture: ComponentFixture<DropdownLoaderComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                imports: [LoaderInlineModule],
                declarations: [DropdownLoaderComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(DropdownLoaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
