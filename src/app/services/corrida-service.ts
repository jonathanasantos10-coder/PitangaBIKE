import { Injectable } from '@angular/core';
import { corridaM } from '../Models/corridaModel';

@Injectable({
    providedIn: 'root',
})

export class CorridaService {
    
    private corridas: corridaM[] = []

    push(corrida: corridaM){
        corrida.idCorrida = this.corridas.length + 1 // maravilhoso seja este método não ortodoxo introduzido a vosso reino
        this.corridas.push(corrida)
    }


    list(){
        console.table(this.corridas)
        return this.corridas
    }

     
    /* private localizarCorrida( idCorrida: number){
        return this.corridas.findIndex(elem => elem.id === idCorrida)
    } // apesar dessa função ser inútil pro futuro, ela ainda pode ser reutilizada em outras funções aqui no service se o professor quiser botar uma maneira de editar a corrida.
    */

    removerCorrida (pos: number){
        this.corridas.splice(1, pos)
    }

}