import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestProposalComponent } from './request-proposal.component';

describe('RequestProposalComponent', () => {
  let component: RequestProposalComponent;
  let fixture: ComponentFixture<RequestProposalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestProposalComponent]
    });
    fixture = TestBed.createComponent(RequestProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
