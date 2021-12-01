import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeDirectriceComponent } from './demande-directrice.component';

describe('DemandeDirectriceComponent', () => {
  let component: DemandeDirectriceComponent;
  let fixture: ComponentFixture<DemandeDirectriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeDirectriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeDirectriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
