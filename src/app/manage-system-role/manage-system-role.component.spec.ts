import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSystemRoleComponent } from './manage-system-role.component';

describe('ManageSystemRoleComponent', () => {
  let component: ManageSystemRoleComponent;
  let fixture: ComponentFixture<ManageSystemRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageSystemRoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSystemRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
