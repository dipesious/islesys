import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadFontComponent } from './download-font.component';

describe('DownloadFontComponent', () => {
  let component: DownloadFontComponent;
  let fixture: ComponentFixture<DownloadFontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadFontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadFontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
