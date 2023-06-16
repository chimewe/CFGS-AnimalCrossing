import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FosilesComponent } from './fosiles.component';

describe('FosilesComponent', () => {
  let component: FosilesComponent;
  let fixture: ComponentFixture<FosilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FosilesComponent]
    });
    fixture = TestBed.createComponent(FosilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
