import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDepesaTabela } from './app-depesa-tabela';

describe('AppDepesaTabela', () => {
  let component: AppDepesaTabela;
  let fixture: ComponentFixture<AppDepesaTabela>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppDepesaTabela],
    }).compileComponents();

    fixture = TestBed.createComponent(AppDepesaTabela);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
