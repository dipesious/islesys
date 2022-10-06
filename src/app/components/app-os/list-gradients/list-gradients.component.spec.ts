import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGradientsComponent } from './list-gradients.component';

describe('ListGradientsComponent', () => {
  let component: ListGradientsComponent;
  let fixture: ComponentFixture<ListGradientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListGradientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGradientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
