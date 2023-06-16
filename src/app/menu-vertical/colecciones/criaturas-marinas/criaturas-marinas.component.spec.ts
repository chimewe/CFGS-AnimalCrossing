import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriaturasMarinasComponent } from './criaturas-marinas.component';

describe('CriaturasMarinasComponent', () => {
  let component: CriaturasMarinasComponent;
  let fixture: ComponentFixture<CriaturasMarinasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriaturasMarinasComponent]
    });
    fixture = TestBed.createComponent(CriaturasMarinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
