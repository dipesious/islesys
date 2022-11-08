import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadDatasetComponent } from './download-dataset.component';

describe('DownloadDatasetComponent', () => {
  let component: DownloadDatasetComponent;
  let fixture: ComponentFixture<DownloadDatasetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadDatasetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownloadDatasetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
