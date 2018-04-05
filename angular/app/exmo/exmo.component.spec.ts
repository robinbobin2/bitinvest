import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExmoComponent } from './exmo.component';

describe('ExmoComponent', () => {
  let component: ExmoComponent;
  let fixture: ComponentFixture<ExmoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExmoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExmoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
