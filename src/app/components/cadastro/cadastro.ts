import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AtletaService } from '../../services/atleta-service';
import { AtletaM } from '../../Models/atletaModel';

@Component({
  selector: 'app-cadastro',
  imports: [FormsModule],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {
  nome = '';
  cpf = '';
  sexo = '';
  cep = 0.0;
  rua = '';
  bairro = '';
  uf = '';
  cidade = '';
  // CONSTRUTOR
  constructor(private atletaService: AtletaService) {}

  exibeDados() {
    console.log(this.nome, this.cpf, this.sexo, this.cep);
  }

  saveAtleta() {
    const atletaP = new AtletaM();
    atletaP.nome = this.nome;
    atletaP.cpf = this.cpf;
    atletaP.sexo = this.sexo;
    atletaP.cep = this.cep;
    atletaP.rua = this.rua;
    atletaP.bairro = this.bairro;
    atletaP.uf = this.uf;
    atletaP.cidade = this.cidade;
    this.exibeDados();
    this.limpar();
    this.atletaService.list();
    this.atletaService.push(atletaP);
  }

  limpar() {
    this.nome = '';
    this.cpf = '';
    this.sexo = '';
    this.cep = 0.0;
    this.rua = '';
    this.bairro = '';
    this.uf = '';
    this.cidade = '';
  }
}
