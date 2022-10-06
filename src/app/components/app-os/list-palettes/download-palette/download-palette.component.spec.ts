import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadPaletteComponent } from './download-palette.component';

describe('DownloadPaletteComponent', () => {
  let component: DownloadPaletteComponent;
  let fixture: ComponentFixture<DownloadPaletteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadPaletteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadPaletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
