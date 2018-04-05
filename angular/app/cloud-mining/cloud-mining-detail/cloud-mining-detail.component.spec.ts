import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudMiningDetailComponent } from './cloud-mining-detail.component';

describe('CloudMiningDetailComponent', () => {
  let component: CloudMiningDetailComponent;
  let fixture: ComponentFixture<CloudMiningDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloudMiningDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudMiningDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
