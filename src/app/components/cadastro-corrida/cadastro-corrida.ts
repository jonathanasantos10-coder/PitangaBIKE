import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CorridaService } from '../../services/corrida-service';
import { corridaM } from '../../Models/corridaModel';
import { ActivatedRoute } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { error } from 'console';
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

  constructor(
    private corridaService: CorridaService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
  ) {}

  idCorrida = 0;
  edit = false;
  ngOnInit() {
    this.idCorrida = Number(this.route.snapshot.paramMap.get('id'));

    if (this.idCorrida > 0) {
      this.edit = true;
      this.carregaDados(this.idCorrida);
    }
  }

  saveCorrida() {
    const CorridaO = new corridaM();
    CorridaO.descricao = this.descricao;
    CorridaO.data = this.data;
    CorridaO.distancia = this.distancia;

    if (this.edit) {
      CorridaO.id = this.idCorrida;
      this.corridaService.alterarCorrida(CorridaO)
        .subscribe({
          next: (respostaAPI) => {
            return respostaAPI
          },
          error: (msgErro) => {
            return msgErro
          }
        })
    } else {
      this.corridaService.adicionarCorrida(CorridaO).subscribe({
        next: (resposta) => {
          console.log(resposta);
        },
        error: (msgErro) => {
          console.log('aqui o erro o', msgErro);
        },
      });
    }

    this.limpaForm();
    // tá printando uma classe vazia mas na api tá tudo certo, vitória da classe operária porra!!!!
  }

  limpaForm() {
    this.descricao = '';
    this.distancia = '';
    this.data = '';
  }

  carregaDados(idCorrida: number) {
    this.corridaService.listarCorridas(idCorrida).subscribe({
      next: (dadosCorrida) => {
        this.descricao = dadosCorrida.descricao;
        this.distancia = dadosCorrida.distancia;
        this.data = dadosCorrida.data;

        this.cdr.detectChanges();
      },
      error: (msgerro) => {
        return msgerro;
      },
    });
  }
}
