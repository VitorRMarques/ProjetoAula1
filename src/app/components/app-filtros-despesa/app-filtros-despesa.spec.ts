import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFiltrosDespesa } from './app-filtros-despesa';

describe('AppFiltrosDespesa', () => {
  let component: AppFiltrosDespesa;
  let fixture: ComponentFixture<AppFiltrosDespesa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppFiltrosDespesa],
    }).compileComponents();

    fixture = TestBed.createComponent(AppFiltrosDespesa);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
