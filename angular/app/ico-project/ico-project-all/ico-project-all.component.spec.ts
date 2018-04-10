import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IcoProjectAllComponent } from './ico-project-all.component';

describe('IcoProjectAllComponent', () => {
  let component: IcoProjectAllComponent;
  let fixture: ComponentFixture<IcoProjectAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcoProjectAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IcoProjectAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
