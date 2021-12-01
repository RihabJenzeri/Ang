import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectriceComponent } from './directrice.component';

describe('DirectriceComponent', () => {
  let component: DirectriceComponent;
  let fixture: ComponentFixture<DirectriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
