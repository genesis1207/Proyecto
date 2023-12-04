import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeEquiposComponent } from './lista-de-equipos.component';

describe('ListaDeEquiposComponent', () => {
  let component: ListaDeEquiposComponent;
  let fixture: ComponentFixture<ListaDeEquiposComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaDeEquiposComponent]
    });
    fixture = TestBed.createComponent(ListaDeEquiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
