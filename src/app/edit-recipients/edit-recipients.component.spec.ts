import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRecipientsComponent } from './edit-recipients.component';

describe('EditRecipientsComponent', () => {
  let component: EditRecipientsComponent;
  let fixture: ComponentFixture<EditRecipientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRecipientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRecipientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
