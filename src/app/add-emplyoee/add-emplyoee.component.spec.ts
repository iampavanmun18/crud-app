import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEMplyoeeComponent } from './add-emplyoee.component';

describe('AddEMplyoeeComponent', () => {
  let component: AddEMplyoeeComponent;
  let fixture: ComponentFixture<AddEMplyoeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEMplyoeeComponent]
    });
    fixture = TestBed.createComponent(AddEMplyoeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
