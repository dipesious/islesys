import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadShadeComponent } from './download-shade.component';

describe('DownloadShadeComponent', () => {
  let component: DownloadShadeComponent;
  let fixture: ComponentFixture<DownloadShadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadShadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownloadShadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
