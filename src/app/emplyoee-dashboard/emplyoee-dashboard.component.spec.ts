import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplyoeeDashboardComponent } from './emplyoee-dashboard.component';

describe('EmplyoeeDashboardComponent', () => {
  let component: EmplyoeeDashboardComponent;
  let fixture: ComponentFixture<EmplyoeeDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmplyoeeDashboardComponent]
    });
    fixture = TestBed.createComponent(EmplyoeeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
