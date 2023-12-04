import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-generar-reporte',
  templateUrl: './generar-reporte.component.html',
  styleUrls: ['./generar-reporte.component.css']
})
export class GenerarReporteComponent {
  equipmentID: string = '';
  reportType: string = '';
  reportDescription: string = '';
  formError: string = '';
  reportItems: { equipmentID: string, reportType: string, reportDescription: string }[] = [];

  generarReporte(reportForm: any): void {
    if (!this.equipmentID || !this.reportType || !this.reportDescription.trim()) {
      this.formError = 'Por favor, complete todos los campos del formulario.';
    } else {
      this.reportItems.push({
        equipmentID: this.equipmentID,
        reportType: this.reportType,
        reportDescription: this.reportDescription
      });

      this.equipmentID = '';
      this.reportType = '';
      this.reportDescription = '';
      this.formError = '';
    }
  }
}