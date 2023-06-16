import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HermanasManitasComponent } from './hermanas-manitas.component';

describe('HermanasManitasComponent', () => {
  let component: HermanasManitasComponent;
  let fixture: ComponentFixture<HermanasManitasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HermanasManitasComponent]
    });
    fixture = TestBed.createComponent(HermanasManitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
