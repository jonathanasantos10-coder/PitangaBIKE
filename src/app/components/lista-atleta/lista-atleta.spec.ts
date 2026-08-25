import {TestBed } from '@angular/core/testing';
import { AtletaService } from '../../services/atleta-service';
import { provideHttpClient } from '@angular/common/http'
describe('ListaAtleta', () => {
  let service: AtletaService;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [AtletaService, provideHttpClient]
    }).compileComponents();

   service = TestBed.inject(AtletaService)
  });

  it('Resultado esperado é calcular corretamente a idade', () => { 
   const resultado = service.calcularIdade('2006-07-07')
    expect(resultado).toBe(20);
  });
});

