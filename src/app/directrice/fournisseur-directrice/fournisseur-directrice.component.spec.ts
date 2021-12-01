import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FournisseurDirectriceComponent } from './fournisseur-directrice.component';

describe('FournisseurDirectriceComponent', () => {
  let component: FournisseurDirectriceComponent;
  let fixture: ComponentFixture<FournisseurDirectriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FournisseurDirectriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FournisseurDirectriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
