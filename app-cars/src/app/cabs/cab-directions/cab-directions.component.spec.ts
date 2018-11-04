import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabDirectionsComponent } from './cab-directions.component';

describe('CabDirectionsComponent', () => {
  let component: CabDirectionsComponent;
  let fixture: ComponentFixture<CabDirectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabDirectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabDirectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
