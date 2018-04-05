import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewCategoriesComponent } from './review-categories.component';

describe('ReviewCategoriesComponent', () => {
  let component: ReviewCategoriesComponent;
  let fixture: ComponentFixture<ReviewCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
