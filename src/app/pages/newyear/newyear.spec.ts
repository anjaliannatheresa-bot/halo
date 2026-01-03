import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Newyear } from './newyear';

describe('Newyear', () => {
  let component: Newyear;
  let fixture: ComponentFixture<Newyear>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Newyear]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Newyear);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
