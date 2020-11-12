import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileManagementComponent } from './tile-management.component';

describe('TileManagementComponent', () => {
  let component: TileManagementComponent;
  let fixture: ComponentFixture<TileManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TileManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TileManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
