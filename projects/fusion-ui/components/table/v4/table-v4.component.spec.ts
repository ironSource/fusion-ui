import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableV4Component } from './table-v4.component';

describe('TableV4Component', () => {
  let component: TableV4Component;
  let fixture: ComponentFixture<TableV4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableV4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableV4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
