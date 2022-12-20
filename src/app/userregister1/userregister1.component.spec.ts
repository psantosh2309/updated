import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Userregister1Component } from './userregister1.component';

describe('Userregister1Component', () => {
  let component: Userregister1Component;
  let fixture: ComponentFixture<Userregister1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Userregister1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Userregister1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
