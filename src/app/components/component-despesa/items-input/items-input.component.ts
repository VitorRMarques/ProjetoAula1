import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-items-input',
    templateUrl: './items-input.component.html',
    styleUrls: ['./items-input.component.css'],
    standalone: true
        ,
        imports: [CommonModule, ReactiveFormsModule]
})
export class ItemsInputComponent {
    @Input() despesaForm!: FormGroup;
    @Input() totalGasto: number = 0;
    @Input() sugestoesCategoria: string[] = [];

    @Output() adicionarDespesa = new EventEmitter<void>();

    onSubmit(): void {
        this.adicionarDespesa.emit();
    }
}
