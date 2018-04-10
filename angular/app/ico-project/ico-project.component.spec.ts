import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IcoProjectComponent } from './ico-project.component';

describe('IcoProjectComponent', () => {
  let component: IcoProjectComponent;
  let fixture: ComponentFixture<IcoProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcoProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IcoProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
