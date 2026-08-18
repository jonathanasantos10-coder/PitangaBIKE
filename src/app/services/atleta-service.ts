import { Injectable } from '@angular/core';
import { AtletaM } from '../Models/atletaModel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})

export class AtletaService {
  constructor(private http: HttpClient) { }
   

    adicionarAtleta(atleta: AtletaM): Observable<AtletaM> {
    const urlApi = `https://6a8387bacb486d243403bb3b.mockapi.io/apiPitanga/AtletaM`

    return this.http.post<AtletaM>(urlApi, atleta)
    }

    ApiLIst(): Observable<AtletaM[]> {
        const urlApi = `https://6a8387bacb486d243403bb3b.mockapi.io/apiPitanga/AtletaM`
        return this.http.get<AtletaM[]>(urlApi)

    }

    listarAtleta(idAtleta: number):Observable<AtletaM>{
    const urlApi = `https://6a8387bacb486d243403bb3b.mockapi.io/apiPitanga/AtletaM/${idAtleta}`

    return this.http.get<AtletaM>(urlApi)
  }

    alterarAtleta(atleta: AtletaM):Observable<AtletaM>{
    const urlApi = `https://6a8387bacb486d243403bb3b.mockapi.io/apiPitanga/AtletaM/${atleta.id}`

    return this.http.put<AtletaM>(urlApi, atleta)
  }

    //EXCLUIR NA API
  exluirAtleta(atleta: AtletaM): Observable<AtletaM> {
    const urlApi = `https://6a8387bacb486d243403bb3b.mockapi.io/apiPitanga/AtletaM/${atleta.id}`

    return this.http.delete<AtletaM>(urlApi)
  }

  }

  






    /* push(atleta: AtletaM) {
        atleta.id = this.atletas.length + 1 // gerador de id artesanal patenteado pelo prof alisson
        this.atletas.push(atleta)
    }

    list(){
        return this.atletas
    }


    private localizarAtleta(idAtleta: number){
        return this.atletas.findIndex(elem => elem.id === idAtleta)
    }

    removerAtleta(pos: number){
        this.atletas.splice(1, pos)
    }

    editarAtleta(atleta: AtletaM){
        let pos = this.localizarAtleta(atleta.id)

        if(pos >=0){
        this.atletas[pos] = atleta
        }
    }
}
*/