import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-app-filtros-despesa',
  imports: [],
  templateUrl: './app-filtros-despesa.html',
  styleUrl: './app-filtros-despesa.css',
})
export class AppFiltrosDespesa {
  @Output() filtroCategoriaChange = new EventEmitter<string>()
  @Output() filtroDataChange = new EventEmitter<string>()
  @Output() limpar = new EventEmitter<void>()
}
