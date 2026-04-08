import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Despesa } from '../../models/despesa.model';

@Component({
  selector: 'app-app-depesa-tabela',
  imports: [],
  templateUrl: './app-depesa-tabela.html',
  styleUrl: './app-depesa-tabela.css',
})
export class AppDepesaTabela {
  @Input() despesas: Despesa[] = [];
  @Output() excluir = new EventEmitter<number>()
}
