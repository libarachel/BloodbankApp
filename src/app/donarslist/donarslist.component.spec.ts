import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonarslistComponent } from './donarslist.component';

describe('DonarslistComponent', () => {
  let component: DonarslistComponent;
  let fixture: ComponentFixture<DonarslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonarslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonarslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
