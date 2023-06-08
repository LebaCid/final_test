import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadCapabilityComponent } from './download-capability.component';

describe('DownloadCapabilityComponent', () => {
  let component: DownloadCapabilityComponent;
  let fixture: ComponentFixture<DownloadCapabilityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DownloadCapabilityComponent]
    });
    fixture = TestBed.createComponent(DownloadCapabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
