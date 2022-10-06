import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPatternsComponent } from './list-patterns.component';

describe('ListPatternsComponent', () => {
  let component: ListPatternsComponent;
  let fixture: ComponentFixture<ListPatternsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPatternsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPatternsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
