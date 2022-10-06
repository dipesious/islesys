import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppOsComponent } from './app-os.component';

describe('AppOsComponent', () => {
  let component: AppOsComponent;
  let fixture: ComponentFixture<AppOsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppOsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppOsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
