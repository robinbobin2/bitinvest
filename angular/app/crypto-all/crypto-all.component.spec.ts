import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoAllComponent } from './crypto-all.component';

describe('CryptoAllComponent', () => {
  let component: CryptoAllComponent;
  let fixture: ComponentFixture<CryptoAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CryptoAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
