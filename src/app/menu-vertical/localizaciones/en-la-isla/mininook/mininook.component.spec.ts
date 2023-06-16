import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MininookComponent } from './mininook.component';

describe('MininookComponent', () => {
  let component: MininookComponent;
  let fixture: ComponentFixture<MininookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MininookComponent]
    });
    fixture = TestBed.createComponent(MininookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
