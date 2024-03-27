import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {TagComponent} from './tag.component';
import {TooltipModule} from '@ironsource/fusion-ui/components/tooltip/v1';
import {IconModule} from '@ironsource/fusion-ui/components/icon/v1';
import {FlagModule} from '@ironsource/fusion-ui/components/flag/v1';
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('TagComponent', () => {
    let component: TagComponent;
    let fixture: ComponentFixture<TagComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [IconModule, FlagModule, TooltipModule],
            declarations: [TagComponent],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TagComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
