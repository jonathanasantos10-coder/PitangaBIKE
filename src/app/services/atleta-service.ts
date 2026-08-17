import { Injectable } from '@angular/core';
import { AtletaM } from '../Models/atletaModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AtletaService {
  constructor(private http: HttpClient) {}

  private atletas: AtletaM[] = [];

  push(atleta: AtletaM) {
    atleta.idAtleta = this.atletas.length + 1; // gerador de id artesanal patenteado pelo prof alisson
    this.atletas.push(atleta);
  }

  list() {
    console.table(this.atletas);
    return this.atletas;
  }

  private localizarAtleta(idAtleta: number) {
    return this.atletas.findIndex((elem) => elem.idAtleta === idAtleta);
  }

  removerAtleta(pos: number) {
    this.atletas.splice(1, pos);
  }

  editarAtleta(atleta: AtletaM) {
    let pos = this.localizarAtleta(atleta.idAtleta);

    if (pos >= 0) {
      this.atletas[pos] = atleta;
    }
  }
}
