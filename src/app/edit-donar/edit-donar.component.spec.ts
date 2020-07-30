import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDonarComponent } from './edit-donar.component';

describe('EditDonarComponent', () => {
  let component: EditDonarComponent;
  let fixture: ComponentFixture<EditDonarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDonarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDonarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
