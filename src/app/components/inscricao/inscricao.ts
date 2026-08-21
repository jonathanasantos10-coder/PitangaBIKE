import { Component, signal } from '@angular/core'
import { FormsModule } from '@angular/forms';
import { AtletaService } from '../../services/atleta-service';
import { CorridaService } from '../../services/corrida-service';
import { AtletaM } from '../../Models/atletaModel';
import { corridaM } from '../../Models/corridaModel';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { inscricao } from '../../Models/inscricao';

@Component({
  selector: 'app-inscricao',
  imports: [FormsModule],
  templateUrl: './inscricao.html',
  styleUrl: './inscricao.css',
})
export class Inscricao {
  // SIGNALS PARA LISTAS
  listaAtletas = signal<AtletaM[]>([]);
  listaCorridas = signal<corridaM[]>([]);

  // CAMPOS DO FORMULÁRIO
  idInscricao = 0;
  idAtleta = 0;
  idCorrida = 0;
  tamanhoCamiseta = '';
  trouxe = false;
  // CONSTRUTOR
  constructor(
    private atletaService: AtletaService,
    private corridaService: CorridaService,
    private http: HttpClient,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}

  
  ngOnInit() {
    this.idCorrida = Number(this.route.snapshot.paramMap.get('id'));
    this.listarAtletas();
    this.listarCorridas();

    if (this.idCorrida > 0) {
      this.trouxe = true;
      this.trazDados(this.idCorrida);
    }
  }

  // LISTAR ATLETAS
  listarAtletas() {
    this.atletaService.ApiLIst().subscribe({
      next: (dados) => {
        this.listaAtletas.set([...dados].sort((a, b) => a.nome.localeCompare(b.nome)));
      },
      error: (msgErro) => {
        console.log('Erro ao listar os atletas', msgErro);
      },
    });
  }

  // LISTAR CORRIDAS
  listarCorridas() {
    this.corridaService.listApi().subscribe({
      next: (dados) => {
        this.listaCorridas.set([...dados].sort((a, b) => a.data.localeCompare(b.data)));
      },
      error: (msgErro) => {
        console.log('Erro ao listar as corridas', msgErro);
      },
    });
  }

  salvarInscricao() {
    const InscricaoO = new inscricao()
    InscricaoO.idAtleta = this.idAtleta
    InscricaoO.idCorrida = this.idCorrida
    InscricaoO.tamanhoCamiseta = this.tamanhoCamiseta
    
    if (this.trouxe) {
    InscricaoO.idCorrida = this.idCorrida;
    const urlApi = `https://6a87994270fbbd308f990dc5.mockapi.io/inscricao`;
    this.http.post<any>(urlApi, InscricaoO).subscribe({
      next: (resposta) => {
        console.log('tá no mock lá mano', resposta)
        this.limparFormulario();
      },
      error: (msgErro) => {
        console.log('Erro ao realizar a inscrição', msgErro)
      },
    });

    }else {
      const urlApi = `https://6a87994270fbbd308f990dc5.mockapi.io/inscricao`;

    this.http.post<any>(urlApi, InscricaoO).subscribe({
        next: (resposta) => {
          console.log('tá no mock lá mano', resposta)
          this.limparFormulario();
        },
        error: (msgErro) => {
          console.log('Erro ao realizar a inscrição', msgErro)
        },
      });
  
    }

    };
     
  limparFormulario() {
    this.idAtleta = 0
    this.idCorrida = 0
    this.tamanhoCamiseta = '';
  }

  trazDados(idCorrida: number){
    this.corridaService.listarCorridas(idCorrida).subscribe({
      next: (dados) => {
        this.idCorrida = dados.id;

        this.cdr.detectChanges();
      },
      error: (msgerro) =>{
        return (msgerro)
      }
    });
  }
}

