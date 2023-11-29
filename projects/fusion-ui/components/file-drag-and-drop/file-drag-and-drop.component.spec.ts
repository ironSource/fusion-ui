import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FileDragAndDropComponent} from './file-drag-and-drop.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('FileDragAndDropComponent', () => {
    let component: FileDragAndDropComponent;
    let fixture: ComponentFixture<FileDragAndDropComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FileDragAndDropComponent],
            schemas: [NO_ERRORS_SCHEMA],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FileDragAndDropComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
