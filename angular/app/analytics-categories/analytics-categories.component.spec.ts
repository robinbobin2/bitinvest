import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsCategoriesComponent } from './analytics-categories.component';

describe('AnalyticsCategoriesComponent', () => {
  let component: AnalyticsCategoriesComponent;
  let fixture: ComponentFixture<AnalyticsCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyticsCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticsCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
