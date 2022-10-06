import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadGradientComponent } from './download-gradient.component';

describe('DownloadGradientComponent', () => {
  let component: DownloadGradientComponent;
  let fixture: ComponentFixture<DownloadGradientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadGradientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadGradientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
