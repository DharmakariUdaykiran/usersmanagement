import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Adduser1Component } from './adduser1.component';

describe('Adduser1Component', () => {
  let component: Adduser1Component;
  let fixture: ComponentFixture<Adduser1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Adduser1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Adduser1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
