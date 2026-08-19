import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AtletaService } from '../../services/atleta-service';
import { AtletaM } from '../../Models/atletaModel';

@Component({
  selector: 'app-lista-atleta',
  imports: [],
  templateUrl: './lista-atleta.html',
  styleUrl: './lista-atleta.css',
})
export class ListaAtleta {
  //DECLARAÇÃO ARRAY DO TIPO PESSOA
  //listaAtletas: Atleta[] = []
  listaAtletas = signal<AtletaM[]>([]);

  //DECLARAÇÃO CONSTRUTOR
  constructor(
    private router: Router,
    private http: AtletaService,
  ) {}

  //EXECUTAR INSTRUÇÕES AO CARREGAR CRIAR O COMPONENTE
  ngOnInit() {
    this.listarAtletas();
  }

  //LISTAR OS ATLETAS
  listarAtletas() {
    this.http.ApiLIst().subscribe({
      next: (dados) => {
        //this.listaAtletas = [...dados].sort((a, b) => a.nome.localeCompare(b.nome))
        this.listaAtletas.set([...dados].sort((a, b) => a.nome.localeCompare(b.nome)));
      },
      error: (msgErro) => {
        console.log('Erro ao listar os atletas', msgErro);
      },
    });
  }

  //EXCLUIR ATLETA
  excluirAtleta(atleta: AtletaM) {
    if (confirm(`Deseja excluir ${atleta.nome} da competição? `)) {
      this.http.exluirAtleta(atleta).subscribe({
        next: (dados) => {
          this.listaAtletas.update((elem) => elem.filter((a) => a.id !== atleta.id));

          console.log('Atleta excluído com Sucesso ', dados);
        },
        error: (msgErro) => {
          console.log('Erro ao Excluir  o atleta ', msgErro);
        },
      });
    }
    this.ngOnInit();
  }

  //ALTERAR DADOS
  buscarPessoa(id: AtletaM) {
    this.router.navigate(['/cadastro', id]);
  }
}
