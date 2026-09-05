import { Injectable } from '@angular/core';
import { corridaM } from '../Models/corridaModel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CorridaService {
  constructor(private http: HttpClient) {}

  adicionarCorrida(corrida: corridaM): Observable<corridaM> {
    const urlApi = `http://127.0.0.1:8000/corrida/`;
    return this.http.post<corridaM>(urlApi, corrida);
  }

  listApi(): Observable<corridaM[]> {
    const urlApi = `http://127.0.0.1:8000/corrida/`;
    return this.http.get<corridaM[]>(urlApi);
  }

  listarCorridas(idCorrida: number): Observable<corridaM> {
    const urlApi = `http://127.0.0.1:8000/corrida/${idCorrida}`;
    return this.http.get<corridaM>(urlApi);
  }

  excluirCorrida(corrida: corridaM): Observable<corridaM> {
    const urlApi = `http://127.0.0.1:8000/corrida/${corrida.idcorrida}`;
    return this.http.delete<corridaM>(urlApi);
  }

  alterarCorrida(corrida: corridaM) {
    const urlAPi = `http://127.0.0.1:8000/corrida/${corrida.idcorrida}`;
    return this.http.put<corridaM>(urlAPi, corrida);
  }
}