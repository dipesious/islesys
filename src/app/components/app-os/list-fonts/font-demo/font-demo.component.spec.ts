import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontDemoComponent } from './font-demo.component';

describe('FontDemoComponent', () => {
  let component: FontDemoComponent;
  let fixture: ComponentFixture<FontDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FontDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FontDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
