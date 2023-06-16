import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElAldeanoComponent } from './el-aldeano.component';

describe('ElAldeanoComponent', () => {
  let component: ElAldeanoComponent;
  let fixture: ComponentFixture<ElAldeanoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElAldeanoComponent]
    });
    fixture = TestBed.createComponent(ElAldeanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
