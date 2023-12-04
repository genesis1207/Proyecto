import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEquiposComponent } from './agregar-equipos.component';

describe('AgregarEquiposComponent', () => {
  let component: AgregarEquiposComponent;
  let fixture: ComponentFixture<AgregarEquiposComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarEquiposComponent]
    });
    fixture = TestBed.createComponent(AgregarEquiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
