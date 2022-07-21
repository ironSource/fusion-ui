import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FileCsvUploadComponent} from './file-csv-upload.component';

describe('FileCsvUploadComponent', () => {
    let component: FileCsvUploadComponent;
    let fixture: ComponentFixture<FileCsvUploadComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FileCsvUploadComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FileCsvUploadComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
