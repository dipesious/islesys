import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPalettesComponent } from './list-palettes.component';

describe('ListPalettesComponent', () => {
  let component: ListPalettesComponent;
  let fixture: ComponentFixture<ListPalettesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPalettesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPalettesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
