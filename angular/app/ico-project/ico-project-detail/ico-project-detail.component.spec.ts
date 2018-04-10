import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IcoProjectDetailComponent } from './ico-project-detail.component';

describe('IcoProjectDetailComponent', () => {
  let component: IcoProjectDetailComponent;
  let fixture: ComponentFixture<IcoProjectDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcoProjectDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IcoProjectDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
