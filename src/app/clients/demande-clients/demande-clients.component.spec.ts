import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeClientsComponent } from './demande-clients.component';

describe('DemandeClientsComponent', () => {
  let component: DemandeClientsComponent;
  let fixture: ComponentFixture<DemandeClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeClientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
