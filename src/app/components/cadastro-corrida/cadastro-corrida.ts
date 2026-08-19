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
  id = 0;
  descricao = '';
  data = '';
  distancia = '';

  constructor(private corridaService: CorridaService) {}

  saveCorrida() {
    const CorridaO = new corridaM()
    CorridaO.descricao = this.descricao;
    CorridaO.data = this.data;
    CorridaO.distancia = this.distancia;

    this.corridaService.adicionarCorrida(CorridaO)
      .subscribe({
        next: (resposta) =>{
          console.log(resposta)
        },
        error: (msgErro) =>{
          console.log("aqui o erro o", msgErro)
        }
      })
      this.limpaForm()
    // tá printando uma classe vazia mas na api tá tudo certo, vitória da classe operária porra!!!!
  }

  limpaForm(){
    this.descricao = ''
    this.distancia = ''
    this.data = ''
  }
}
