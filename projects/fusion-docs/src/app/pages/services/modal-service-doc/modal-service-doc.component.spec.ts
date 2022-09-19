import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import {ModalServiceDocComponent} from './modal-service-doc.component';
import {RouterModule} from '@angular/router';
import {ExampleBlockModule} from '../../../components/example-block/example-block.module';
import {CodeBlockModule} from '../../../components/code-block/code-block.module';
import {DocsMenuModule} from '../../../components/docs-menu/docs-menu.module';

describe('ModalServiceDocComponent', () => {
    let component: ModalServiceDocComponent;
    let fixture: ComponentFixture<ModalServiceDocComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ModalServiceDocComponent],
            imports: [RouterModule, ExampleBlockModule, CodeBlockModule, DocsMenuModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ModalServiceDocComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
