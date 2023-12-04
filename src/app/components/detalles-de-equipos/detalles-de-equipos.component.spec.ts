import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesDeEquiposComponent } from './detalles-de-equipos.component';

describe('DetallesDeEquiposComponent', () => {
  let component: DetallesDeEquiposComponent;
  let fixture: ComponentFixture<DetallesDeEquiposComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallesDeEquiposComponent]
    });
    fixture = TestBed.createComponent(DetallesDeEquiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
