import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IcoProjectCategoriesComponent } from './ico-project-categories.component';

describe('IcoProjectCategoriesComponent', () => {
  let component: IcoProjectCategoriesComponent;
  let fixture: ComponentFixture<IcoProjectCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcoProjectCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IcoProjectCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
