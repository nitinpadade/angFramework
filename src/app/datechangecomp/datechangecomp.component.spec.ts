import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatechangecompComponent } from './datechangecomp.component';

describe('DatechangecompComponent', () => {
  let component: DatechangecompComponent;
  let fixture: ComponentFixture<DatechangecompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatechangecompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatechangecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
