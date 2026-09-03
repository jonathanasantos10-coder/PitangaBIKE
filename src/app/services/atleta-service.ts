import { Injectable } from '@angular/core';
import { AtletaM } from '../Models/atletaModel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})

export class AtletaService {
  constructor(
    private http: HttpClient) { }

    adicionarAtleta(atleta: AtletaM): Observable<AtletaM> {
    const urlApi = `http://127.0.0.1:8000/pessoa/`

    return this.http.post<AtletaM>(urlApi, atleta)
    }

    ApiLIst(): Observable<AtletaM[]> {
        const urlApi = `http://127.0.0.1:8000/pessoa/`
        return this.http.get<AtletaM[]>(urlApi)

    }

    listarAtleta(idAtleta: number):Observable<AtletaM>{
    const urlApi = `http://127.0.0.1:8000/pessoa/${idAtleta}`

    return this.http.get<AtletaM>(urlApi)
  }

    alterarAtleta(atleta: AtletaM):Observable<AtletaM>{
    const urlApi = `http://127.0.0.1:8000/pessoa/${atleta.id}`

    return this.http.put<AtletaM>(urlApi, atleta)
  }

    //EXCLUIR NA API
  exluirAtleta(atleta: AtletaM): Observable<AtletaM> {
    const urlApi = `http://127.0.0.1:8000/pessoa/${atleta.id}`

    return this.http.delete<AtletaM>(urlApi)
  }

   // FUNÇÃO PARA CALCULAR A IDADE
  calcularIdade(bday: string){
    const anoNascimento = new Date(bday).getFullYear();
    const anoAtual = new Date().getFullYear();
  
    return anoAtual - anoNascimento;
  }

  calcularImc(peso: number, altura: number): number {
  
  return peso / (altura * altura)

    

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