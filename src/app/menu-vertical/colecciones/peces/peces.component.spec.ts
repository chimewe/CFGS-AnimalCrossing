import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PecesComponent } from './peces.component';

describe('PecesComponent', () => {
  let component: PecesComponent;
  let fixture: ComponentFixture<PecesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PecesComponent]
    });
    fixture = TestBed.createComponent(PecesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
