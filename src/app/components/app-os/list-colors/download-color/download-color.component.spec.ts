import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadColorComponent } from './download-color.component';

describe('DownloadColorComponent', () => {
  let component: DownloadColorComponent;
  let fixture: ComponentFixture<DownloadColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadColorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
