import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loginuser1Component } from './loginuser1.component';

describe('Loginuser1Component', () => {
  let component: Loginuser1Component;
  let fixture: ComponentFixture<Loginuser1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Loginuser1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loginuser1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
