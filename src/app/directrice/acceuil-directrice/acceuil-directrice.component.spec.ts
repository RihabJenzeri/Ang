import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceuilDirectriceComponent } from './acceuil-directrice.component';

describe('AcceuilDirectriceComponent', () => {
  let component: AcceuilDirectriceComponent;
  let fixture: ComponentFixture<AcceuilDirectriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceuilDirectriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceuilDirectriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
