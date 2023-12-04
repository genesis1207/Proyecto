import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
interface Equipo {
  nombre: string;
  serial: string;
  estado: string;
  ubicacion: string;
}
@Component({
  selector: 'app-lista-de-equipos',
  templateUrl: './lista-de-equipos.component.html',
  styleUrls: ['./lista-de-equipos.component.css']
})
export class ListaDeEquiposComponent implements OnInit {
  @ViewChild('searchInput', { static: true }) searchInputRef!: ElementRef;

  equipos: Equipo[] = [];
  filteredEquipos: Equipo[] = [];

  constructor(private router: Router) { }

  ngOnInit() {
    this.equipos = [
      { nombre: "Equipo 1", serial: "12345", estado: "Disponible", ubicacion: "Oficina A" },
      { nombre: "Equipo 2", serial: "67890", estado: "En Reparación", ubicacion: "Taller" },
      // Agregar más datos de equipos aquí
    ];

    this.filteredEquipos = [...this.equipos];
  }
  searchEquipos(searchTerm: string): void {
    searchTerm = searchTerm.toLowerCase().trim();
    this.filteredEquipos = this.equipos.filter(equipo =>
      equipo.nombre.toLowerCase().includes(searchTerm) ||
      equipo.serial.toLowerCase().includes(searchTerm) ||
      equipo.estado.toLowerCase().includes(searchTerm) ||
      equipo.ubicacion.toLowerCase().includes(searchTerm)
    );
  }
  ngAfterViewInit() {
    if (this.searchInputRef) {
      const inputElement: HTMLInputElement = this.searchInputRef.nativeElement;
      inputElement.addEventListener('input', (event: Event) => {
        const searchTerm = (event.target as HTMLInputElement).value.toLowerCase().trim();
        this.searchEquipos(searchTerm);
      });
    }
  }
  redirectToDetalle(event: Event): void {
    event.preventDefault();
    // Navegar a la página de detalles de equipos
    this.router.navigate(['/detalles-de-equipos']);
  }
}