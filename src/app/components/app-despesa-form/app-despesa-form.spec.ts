import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDespesaForm } from './app-despesa-form';

describe('AppDespesaForm', () => {
  let component: AppDespesaForm;
  let fixture: ComponentFixture<AppDespesaForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppDespesaForm],
    }).compileComponents();

    fixture = TestBed.createComponent(AppDespesaForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
