import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePersonalComponent } from './manage-personal.component';

describe('ManagePersonalComponent', () => {
  let component: ManagePersonalComponent;
  let fixture: ComponentFixture<ManagePersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagePersonalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
