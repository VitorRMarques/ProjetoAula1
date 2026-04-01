import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule, DatePipe } from '@angular/common';
import { Despesa, TipoCategoriaClassificacao } from '../../../models/despesa.model';

@Component({
    selector: 'app-items-table',
    templateUrl: './items-table.component.html',
    styleUrls: ['./items-table.component.css'],
    standalone: true,
    imports: [CommonModule, DatePipe]
})
export class ItemsTableComponent {
  @Input() despesasFiltradas: Despesa[] = [];
  @Input() classificarCategoria!: (categoria: string) => TipoCategoriaClassificacao;

  @Output() removerDespesa = new EventEmitter<number>();
}