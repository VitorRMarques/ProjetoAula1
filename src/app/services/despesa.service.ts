import { Injectable } from '@angular/core';
import { Despesa } from '../despesa.model';

@Injectable({
  providedIn: 'root'
})
export class DespesaService {
  private readonly storageKey = 'despesas';

  constructor() {}

  // Retorna todas as despesas
  getDespesas(): Despesa[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  // Adiciona uma nova despesa
  addDespesa(despesa: Despesa): void {
    const despesas = this.getDespesas();
    despesas.push(despesa);
    localStorage.setItem(this.storageKey, JSON.stringify(despesas));
  }

  // Remove uma despesa pelo ID
  removeDespesa(id: number): void {
    const despesas = this.getDespesas().filter(d => d.id !== id);
    localStorage.setItem(this.storageKey, JSON.stringify(despesas));
  }

  // Calcula o total gasto
  getTotal(): number {
    return this.getDespesas().reduce((sum, d) => sum + d.valor, 0);
  }

  // Calcula o total gasto para categoria especificada (case-insensitive)
  getTotalPorCategoria(categoria: string): number {
    const cat = categoria.trim().toLowerCase();
    if (!cat) {
      return 0;
    }
    return this.getDespesas()
      .filter(d => d.categoria.trim().toLowerCase() === cat)
      .reduce((sum, d) => sum + d.valor, 0);
  }
}
