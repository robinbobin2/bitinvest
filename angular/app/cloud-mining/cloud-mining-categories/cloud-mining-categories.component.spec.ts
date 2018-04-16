import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudMiningCategoriesComponent } from './cloud-mining-categories.component';

describe('CloudMiningCategoriesComponent', () => {
  let component: CloudMiningCategoriesComponent;
  let fixture: ComponentFixture<CloudMiningCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloudMiningCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudMiningCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
