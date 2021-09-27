import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEmpresasComponent } from './formulario-empresas.component';

describe('FormularioEmpresasComponent', () => {
  let component: FormularioEmpresasComponent;
  let fixture: ComponentFixture<FormularioEmpresasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioEmpresasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
