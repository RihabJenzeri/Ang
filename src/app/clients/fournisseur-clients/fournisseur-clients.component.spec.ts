import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FournisseurClientsComponent } from './fournisseur-clients.component';

describe('FournisseurClientsComponent', () => {
  let component: FournisseurClientsComponent;
  let fixture: ComponentFixture<FournisseurClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FournisseurClientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FournisseurClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
