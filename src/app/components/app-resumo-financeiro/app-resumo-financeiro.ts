import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-app-resumo-financeiro',
  imports: [],
  templateUrl: './app-resumo-financeiro.html',
  styleUrl: './app-resumo-financeiro.css',
})
export class AppResumoFinanceiro {
  @Input() saldo:number = 0
  @Input() totalGasto: number = 0
}
