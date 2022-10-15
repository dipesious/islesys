import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFontComponent } from './add-font.component';

describe('AddFontComponent', () => {
  let component: AddFontComponent;
  let fixture: ComponentFixture<AddFontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
