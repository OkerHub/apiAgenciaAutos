import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarModelosComponent } from './guardar-modelos.component';

describe('GuardarModelosComponent', () => {
  let component: GuardarModelosComponent;
  let fixture: ComponentFixture<GuardarModelosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuardarModelosComponent]
    });
    fixture = TestBed.createComponent(GuardarModelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
