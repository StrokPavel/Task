import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoToDisplayComponent } from './info-to-display.component';

describe('InfoToDisplayComponent', () => {
  let component: InfoToDisplayComponent;
  let fixture: ComponentFixture<InfoToDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoToDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoToDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
