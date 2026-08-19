import { Injectable } from '@angular/core';
import { corridaM } from '../Models/corridaModel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})

export class CorridaService {
     constructor(private http: HttpClient) { }
   

    adicionarCorrida(corrida: corridaM): Observable<corridaM> {
    const urlApi = `https://6a8387bacb486d243403bb3b.mockapi.io/apiPitanga/corridaM`
    console.table(corridaM)
    return this.http.post<corridaM>(urlApi, corrida)
    }

    listApi(): Observable<corridaM[]> {
        const urlApi = `https://6a8387bacb486d243403bb3b.mockapi.io/apiPitanga/corridaM`
        return this.http.get<corridaM[]>(urlApi)
    }

    listarCorridas(idCorrida: number): Observable<corridaM>{
        const urlApi = `https://6a8387bacb486d243403bb3b.mockapi.io/apiPitanga/corridaM/${idCorrida}`
        return this.http.get<corridaM>(urlApi)
    }

    

  }
