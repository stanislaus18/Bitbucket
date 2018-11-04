import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCabsMapsComponent } from './app-cabs-maps.component';

describe('AppCabsMapsComponent', () => {
  let component: AppCabsMapsComponent;
  let fixture: ComponentFixture<AppCabsMapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppCabsMapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCabsMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
