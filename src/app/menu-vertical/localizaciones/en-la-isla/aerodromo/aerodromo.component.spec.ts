import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AerodromoComponent } from './aerodromo.component';

describe('AerodromoComponent', () => {
  let component: AerodromoComponent;
  let fixture: ComponentFixture<AerodromoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AerodromoComponent]
    });
    fixture = TestBed.createComponent(AerodromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
