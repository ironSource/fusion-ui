import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {TagComponent} from './tag.component';
import {TooltipModule} from '../tooltip/tooltip.module';
import {IconModule} from '../icon/icon.module';
import {FlagModule} from '../flag/flag.module';

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
