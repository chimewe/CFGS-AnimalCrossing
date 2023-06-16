import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BichosComponent } from './bichos.component';

describe('BichosComponent', () => {
  let component: BichosComponent;
  let fixture: ComponentFixture<BichosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BichosComponent]
    });
    fixture = TestBed.createComponent(BichosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
