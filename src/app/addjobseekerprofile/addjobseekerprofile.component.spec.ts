import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddjobseekerprofileComponent } from './addjobseekerprofile.component';

describe('AddjobseekerprofileComponent', () => {
  let component: AddjobseekerprofileComponent;
  let fixture: ComponentFixture<AddjobseekerprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddjobseekerprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddjobseekerprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
