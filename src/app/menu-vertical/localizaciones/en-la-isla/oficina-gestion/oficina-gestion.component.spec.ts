import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OficinaGestionComponent } from './oficina-gestion.component';

describe('OficinaGestionComponent', () => {
  let component: OficinaGestionComponent;
  let fixture: ComponentFixture<OficinaGestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OficinaGestionComponent]
    });
    fixture = TestBed.createComponent(OficinaGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
