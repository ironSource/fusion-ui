import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {TagComponent} from './tag.component';
import {TooltipModule, IconModule, FlagModule} from '@ironsource/fusion-ui';

describe('TagComponent', () => {
    let component: TagComponent;
    let fixture: ComponentFixture<TagComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                imports: [IconModule, FlagModule, TooltipModule],
                declarations: [TagComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(TagComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
