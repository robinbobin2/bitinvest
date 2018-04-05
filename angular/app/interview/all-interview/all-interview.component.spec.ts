import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllInterviewComponent } from './all-interview.component';

describe('AllInterviewComponent', () => {
  let component: AllInterviewComponent;
  let fixture: ComponentFixture<AllInterviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllInterviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
