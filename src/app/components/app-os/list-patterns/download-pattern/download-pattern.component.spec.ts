import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadPatternComponent } from './download-pattern.component';

describe('DownloadPatternComponent', () => {
  let component: DownloadPatternComponent;
  let fixture: ComponentFixture<DownloadPatternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadPatternComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadPatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
