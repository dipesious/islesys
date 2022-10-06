import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileBugComponent } from './file-bug.component';

describe('FileBugComponent', () => {
  let component: FileBugComponent;
  let fixture: ComponentFixture<FileBugComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileBugComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileBugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
