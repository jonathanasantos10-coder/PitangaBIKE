import { Injectable } from '@angular/core';
import { AtletaM } from '../Models/atletaModel';

@Injectable({
    providedIn: 'root',
})

export class AtletaService {

    private atletas: AtletaM[] = []

    push(atleta: AtletaM) {
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
