import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGradientComponent } from './add-gradient.component';

describe('AddGradientComponent', () => {
  let component: AddGradientComponent;
  let fixture: ComponentFixture<AddGradientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGradientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGradientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
