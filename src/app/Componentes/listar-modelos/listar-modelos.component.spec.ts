import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarModelosComponent } from './listar-modelos.component';

describe('ListarModelosComponent', () => {
  let component: ListarModelosComponent;
  let fixture: ComponentFixture<ListarModelosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarModelosComponent]
    });
    fixture = TestBed.createComponent(ListarModelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
