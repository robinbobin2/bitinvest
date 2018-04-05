import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoRootComponent } from './crypto-root.component';

describe('CryptoRootComponent', () => {
  let component: CryptoRootComponent;
  let fixture: ComponentFixture<CryptoRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CryptoRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
