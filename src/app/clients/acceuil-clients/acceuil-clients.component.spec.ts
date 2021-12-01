import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceuilClientsComponent } from './acceuil-clients.component';

describe('AcceuilClientsComponent', () => {
  let component: AcceuilClientsComponent;
  let fixture: ComponentFixture<AcceuilClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceuilClientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceuilClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
