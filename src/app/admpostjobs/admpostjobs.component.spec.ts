import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmpostjobsComponent } from './admpostjobs.component';

describe('AdmpostjobsComponent', () => {
  let component: AdmpostjobsComponent;
  let fixture: ComponentFixture<AdmpostjobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmpostjobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmpostjobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
