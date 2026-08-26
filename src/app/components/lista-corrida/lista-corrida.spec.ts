import {TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http'
import { provideHttpClientTesting , HttpTestingController} from '@angular/common/http/testing'
import { CorridaService } from '../../services/corrida-service';
import { corridaM } from '../../Models/corridaModel';
describe('ListaCorrida', () => {
  let service: CorridaService;
  let httpMock: HttpTestingController

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [CorridaService, provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    service = TestBed.inject(CorridaService)
    httpMock = TestBed.inject(HttpTestingController)
  });

  it('Resultado esperado é adicionar uma corrida', () => {
    const corrida : corridaM ={
        "id": 2,
        "descricao": "sei la",
        "data": "ontem",
        "distancia": "5 km"
    }
    
    service.adicionarCorrida(corrida).subscribe(result =>{
      expect(result).toEqual(corrida)
    })
   const requisicao = httpMock.expectOne('https://6a8387bacb486d243403bb3b.mockapi.io/apiPitanga/corridaM')

   expect (requisicao.request.method).toBe('POST')

   requisicao.flush(corrida)
  })
});
