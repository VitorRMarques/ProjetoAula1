import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, DecimalPipe, DatePipe } from '@angular/common';
import { DespesaService } from './services/despesa.service';
import { Despesa } from './despesa.model';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule, DecimalPipe, DatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class App {
  descricao = '';
  valor: number | null = null;
  data: string = '';
  categoria = '';
  searchCategoria = '';
  totalPorCategoria = 0;
  despesas: Despesa[] = [];

  constructor(private readonly despesaService: DespesaService) {
    this.carregarDespesas();
  }

  carregarDespesas() {
    this.despesas = this.despesaService.getDespesas();
  }

  adicionarDespesa() {
    if (!this.descricao || !this.valor || !this.data || !this.categoria) {
      alert('Preencha todos os campos!');
      return;
    }

    const novaDespesa: Despesa = {
      id: Date.now(),
      descricao: this.descricao,
      valor: this.valor,
      data: new Date(this.data),
      categoria: this.categoria
    };

    this.despesaService.addDespesa(novaDespesa);
    this.limparFormulario();
    this.carregarDespesas();
  }

  removerDespesa(id: number) {
    this.despesaService.removeDespesa(id);
    this.carregarDespesas();
  }

  buscarPorCategoria() {
    this.totalPorCategoria = this.despesaService.getTotalPorCategoria(this.searchCategoria);
  }

  limparFormulario() {
    this.descricao = '';
    this.valor = null;
    this.data = '';
    this.categoria = '';
  }

  get totalGasto(): number {
    return this.despesaService.getTotal();
  }
}
