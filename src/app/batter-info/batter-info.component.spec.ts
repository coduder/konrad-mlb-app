import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatterInfoComponent } from './batter-info.component';

describe('BatterInfoComponent', () => {
  let component: BatterInfoComponent;
  let fixture: ComponentFixture<BatterInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatterInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatterInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
