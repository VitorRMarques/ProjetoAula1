import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Despesa, TipoCategoriaClassificacao, MAPEAMENTO_CATEGORIAS } from '../../../models/despesa.model';

@Component({
    selector: 'app-filtros-despesa',
    templateUrl: './filtros.component.html',
    styleUrls: ['./filtros.component.css'],
    standalone: true,
    imports: [CommonModule, FormsModule, ReactiveFormsModule, DatePipe]
})
export class FiltrosComponent {
    @Input() despesas: Despesa[] = [];
    @Input() despesasFiltradas: Despesa[] = [];
    @Input() filtroCategoria: string = '';
    @Input() filtroData: string = '';

    @Output() filtroCategoriaChange = new EventEmitter<string>();
    @Output() filtroDataChange = new EventEmitter<string>();
    @Output() limparFiltro = new EventEmitter<void>();

    atualizarFiltroCategoria(value: string): void {
        this.filtroCategoriaChange.emit(value);
    }

    atualizarFiltroData(value: string): void {
        this.filtroDataChange.emit(value);
    }

    onLimparFiltro(): void {
        this.limparFiltro.emit();
    }

    obterSugestoesCategoria(): string[] {
        return Object.keys(MAPEAMENTO_CATEGORIAS).sort();
    }

    classificarCategoria(categoria: string): TipoCategoriaClassificacao {
        const catLower = categoria.trim().toLowerCase();
        return MAPEAMENTO_CATEGORIAS[catLower] || 'Materiais';
    }
}
