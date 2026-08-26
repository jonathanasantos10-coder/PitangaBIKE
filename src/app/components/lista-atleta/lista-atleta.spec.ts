import {TestBed } from '@angular/core/testing';
import { AtletaService } from '../../services/atleta-service';
import { provideHttpClient } from '@angular/common/http'
import { AtletaM } from '../../Models/atletaModel';
import { provideHttpClientTesting , HttpTestingController} from '@angular/common/http/testing'
describe('ListaAtleta', () => {
  let service: AtletaService;
  let httpMock: HttpTestingController
   
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [AtletaService, provideHttpClient(), provideHttpClientTesting()]
    }).compileComponents();

   service = TestBed.inject(AtletaService)
   httpMock = TestBed.inject(HttpTestingController)
  });

  it('Resultado esperado é calcular corretamente a idade', () => { 
   const resultado = service.calcularIdade('2006-07-07')
    expect(resultado).toBe(20);
  });

  it('Resultado esperado a lista de atletas', () => {
    const atletas: AtletaM[] = [{
      "nome": "Rute",
      "cpf": "78945612300",
      "sexo": "",
      "cep": 49001456,
      "rua": "Rua Capela",
      "bairro": "Centro",
      "cidade": "Aracaju",
      "uf": "SE",
      "bday": "1980-02-12",
      "id": 1
    },
  ]
    service.ApiLIst().subscribe(result => {
      expect (result).toEqual(atletas)
    })
   const requisicao = httpMock.expectOne('https://6a8387bacb486d243403bb3b.mockapi.io/apiPitanga/AtletaM')

   expect (requisicao.request.method).toBe('GET')

   requisicao.flush(atletas)
  })

  it('Resultado esperado adicionar atleta', () =>{
    const atleta : AtletaM ={
      "nome": "Pescoco fino",
      "cpf": "78945612300",
      "sexo": "",
      "cep": 49001456,
      "rua": "Rua Capela",
      "bairro": "Centro",
      "cidade": "Aracaju",
      "uf": "SE",
      "bday": "1980-02-12",
      "id": 3
    }

    service.adicionarAtleta(atleta).subscribe(result =>{
      expect(result).toEqual(atleta)
    })

  const requisicao = httpMock.expectOne('https://6a8387bacb486d243403bb3b.mockapi.io/apiPitanga/AtletaM')

   expect (requisicao.request.method).toBe('POST')

   requisicao.flush(atleta)
  })


  it('Resultado esperado alterar um atleta', () => {
    const atleta : AtletaM ={
      "nome": "brochacho",
      "cpf": "78945612300",
      "sexo": "",
      "cep": 49001456,
      "rua": "Rua Capela",
      "bairro": "Centro",
      "cidade": "Aracaju",
      "uf": "SE",
      "bday": "1980-02-12",
      "id": 4
    }

    service.alterarAtleta(atleta).subscribe(result => {
      expect(result).toEqual(atleta)
    }) 
  const requisicao = httpMock.expectOne('https://6a8387bacb486d243403bb3b.mockapi.io/apiPitanga/AtletaM/4')

  expect (requisicao.request.method).toBe('PUT')

  requisicao.flush(atleta)
  })

  it('Resultado esperado excluir um atleta', () => {
    const atleta : AtletaM = {
      "nome": "brochacho",
      "cpf": "78945612300",
      "sexo": "",
      "cep": 49001456,
      "rua": "Rua Capela",
      "bairro": "Centro",
      "cidade": "Aracaju",
      "uf": "SE",
      "bday": "1980-02-12",
      "id": 4
    }

    service.exluirAtleta(atleta).subscribe(result => {
      expect(result).toEqual(atleta)
    })

    const requisicao = httpMock.expectOne('https://6a8387bacb486d243403bb3b.mockapi.io/apiPitanga/AtletaM/4')

    expect (requisicao.request.method).toBe('DELETE')
  
    requisicao.flush(atleta)

  })

});

