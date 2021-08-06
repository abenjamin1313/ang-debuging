import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashboard1HeaderComponent } from './dashboard1-header.component';

describe('Dashboard1HeaderComponent', () => {
  let component: Dashboard1HeaderComponent;
  let fixture: ComponentFixture<Dashboard1HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dashboard1HeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dashboard1HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
