import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HhpComponent } from './hhp.component';

describe('HhpComponent', () => {
  let component: HhpComponent;
  let fixture: ComponentFixture<HhpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HhpComponent]
    });
    fixture = TestBed.createComponent(HhpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
