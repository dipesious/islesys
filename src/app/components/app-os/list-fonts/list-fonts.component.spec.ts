import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFontsComponent } from './list-fonts.component';

describe('ListFontsComponent', () => {
  let component: ListFontsComponent;
  let fixture: ComponentFixture<ListFontsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFontsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFontsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
