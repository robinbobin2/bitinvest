import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewCategoriesComponent } from './interview-categories.component';

describe('InterviewCategoriesComponent', () => {
  let component: InterviewCategoriesComponent;
  let fixture: ComponentFixture<InterviewCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterviewCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
