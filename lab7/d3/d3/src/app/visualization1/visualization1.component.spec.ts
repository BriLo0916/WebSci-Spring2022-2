import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Visualization1Component } from './visualization1.component';

describe('Visualization1Component', () => {
  let component: Visualization1Component;
  let fixture: ComponentFixture<Visualization1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Visualization1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Visualization1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
