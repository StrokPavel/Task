import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardWithInfoComponent } from './card-with-info.component';

describe('CardWithInfoComponent', () => {
  let component: CardWithInfoComponent;
  let fixture: ComponentFixture<CardWithInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardWithInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardWithInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
