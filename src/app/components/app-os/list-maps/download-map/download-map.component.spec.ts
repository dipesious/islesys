import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadMapComponent } from './download-map.component';

describe('DownloadMapComponent', () => {
  let component: DownloadMapComponent;
  let fixture: ComponentFixture<DownloadMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
