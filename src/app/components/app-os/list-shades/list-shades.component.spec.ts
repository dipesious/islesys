import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListShadesComponent } from './list-shades.component';

describe('ListShadesComponent', () => {
  let component: ListShadesComponent;
  let fixture: ComponentFixture<ListShadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListShadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListShadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
