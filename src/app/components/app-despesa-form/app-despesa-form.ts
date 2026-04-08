import { Component, EventEmitter, Output } from '@angular/core';
import { Despesa } from '../../models/despesa.model';

@Component({
  selector: 'app-app-despesa-form',
  imports: [],
  templateUrl: './app-despesa-form.html',
  styleUrl: './app-despesa-form.css',
})
export class AppDespesaForm {
  @Output() onSubmit = new EventEmitter<Despesa>();
}
