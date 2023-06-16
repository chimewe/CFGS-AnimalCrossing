import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajesPrincipalesComponent } from './personajes-principales.component';

describe('PersonajesPrincipalesComponent', () => {
  let component: PersonajesPrincipalesComponent;
  let fixture: ComponentFixture<PersonajesPrincipalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonajesPrincipalesComponent]
    });
    fixture = TestBed.createComponent(PersonajesPrincipalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
