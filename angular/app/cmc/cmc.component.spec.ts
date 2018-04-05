import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmcComponent } from './cmc.component';

describe('CmcComponent', () => {
  let component: CmcComponent;
  let fixture: ComponentFixture<CmcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
