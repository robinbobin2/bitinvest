import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopIcoComponent } from './top-ico.component';

describe('TopIcoComponent', () => {
  let component: TopIcoComponent;
  let fixture: ComponentFixture<TopIcoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopIcoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopIcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
