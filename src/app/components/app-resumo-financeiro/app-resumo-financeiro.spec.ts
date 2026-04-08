import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppResumoFinanceiro } from './app-resumo-financeiro';

describe('AppResumoFinanceiro', () => {
  let component: AppResumoFinanceiro;
  let fixture: ComponentFixture<AppResumoFinanceiro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppResumoFinanceiro],
    }).compileComponents();

    fixture = TestBed.createComponent(AppResumoFinanceiro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
