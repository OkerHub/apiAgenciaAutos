import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarModelosComponent } from './eliminar-modelos.component';

describe('EliminarModelosComponent', () => {
  let component: EliminarModelosComponent;
  let fixture: ComponentFixture<EliminarModelosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EliminarModelosComponent]
    });
    fixture = TestBed.createComponent(EliminarModelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
