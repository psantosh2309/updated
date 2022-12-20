import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamlinkComponent } from './examlink.component';

describe('ExamlinkComponent', () => {
  let component: ExamlinkComponent;
  let fixture: ComponentFixture<ExamlinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamlinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
