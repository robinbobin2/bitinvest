import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCloudMiningComponent } from './all-cloud-mining.component';

describe('AllCloudMiningComponent', () => {
  let component: AllCloudMiningComponent;
  let fixture: ComponentFixture<AllCloudMiningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCloudMiningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCloudMiningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
