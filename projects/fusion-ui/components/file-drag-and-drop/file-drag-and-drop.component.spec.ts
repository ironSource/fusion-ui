import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FileDragAndDropComponent} from './file-drag-and-drop.component';

describe('FileDragAndDropComponent', () => {
    let component: FileDragAndDropComponent;
    let fixture: ComponentFixture<FileDragAndDropComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FileDragAndDropComponent]
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
