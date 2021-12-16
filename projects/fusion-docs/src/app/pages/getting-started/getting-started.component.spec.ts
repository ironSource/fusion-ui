import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {GettingStartedComponent} from './getting-started.component';
import {RouterTestingModule} from '@angular/router/testing';
import {CopyToClipboardModule, IconModule, TooltipModule} from 'projects/fusion-ui/src/public-api';
import {HttpClientModule} from '@angular/common/http';
import {CodeBlockModule} from '../../components/code-block/code-block.module';

describe('GettingStartedComponent', () => {
    let component: GettingStartedComponent;
    let fixture: ComponentFixture<GettingStartedComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                imports: [RouterTestingModule, CodeBlockModule, CopyToClipboardModule, IconModule, TooltipModule, HttpClientModule],
                declarations: [GettingStartedComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(GettingStartedComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
