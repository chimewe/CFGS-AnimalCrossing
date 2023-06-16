import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CayoFaunoComponent } from './cayo-fauno.component';

describe('CayoFaunoComponent', () => {
  let component: CayoFaunoComponent;
  let fixture: ComponentFixture<CayoFaunoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CayoFaunoComponent]
    });
    fixture = TestBed.createComponent(CayoFaunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
