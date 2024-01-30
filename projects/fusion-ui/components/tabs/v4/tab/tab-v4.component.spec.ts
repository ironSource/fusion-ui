import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabV4Component } from './tab-v4.component';

describe('TabV4Component', () => {
  let component: TabV4Component;
  let fixture: ComponentFixture<TabV4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TabV4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabV4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
