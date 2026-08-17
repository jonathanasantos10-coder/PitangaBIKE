import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CorridaService } from '../../services/corrida-service';
import { corridaM } from '../../Models/corridaModel';

@Component({
  selector: 'app-cadastro-corrida',
  imports: [FormsModule],
  templateUrl: './cadastro-corrida.html',
  styleUrl: './cadastro-corrida.css',
})
export class CadastroCorrida {
  descricao = '';
  data = '';
  distancia = '';

  constructor(private corridaService: CorridaService) {}

  listaTeste() {
    console.log(this.descricao, this.data, this.distancia);
  }

  saveCorrida() {
    const corridaP = new corridaM();

    corridaP.descricao = this.descricao;
    corridaP.data = this.data;
    corridaP.distancia = this.distancia;
    this.listaTeste();
    this.corridaService.list();
    this.corridaService.push(corridaP);
  }
}
