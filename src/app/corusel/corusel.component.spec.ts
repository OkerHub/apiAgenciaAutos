import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoruselComponent } from './corusel.component';

describe('CoruselComponent', () => {
  let component: CoruselComponent;
  let fixture: ComponentFixture<CoruselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoruselComponent]
    });
    fixture = TestBed.createComponent(CoruselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
