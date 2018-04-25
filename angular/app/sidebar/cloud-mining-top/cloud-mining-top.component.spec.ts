import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudMiningTopComponent } from './cloud-mining-top.component';

describe('CloudMiningTopComponent', () => {
  let component: CloudMiningTopComponent;
  let fixture: ComponentFixture<CloudMiningTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloudMiningTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudMiningTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
