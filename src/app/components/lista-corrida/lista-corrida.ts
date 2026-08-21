import { Component, signal } from '@angular/core';
import { corridaM } from '../../Models/corridaModel';
import { Router } from '@angular/router';
import { CorridaService } from '../../services/corrida-service';

@Component({
  selector: 'app-lista-corrida',
  imports: [],
  templateUrl: './lista-corrida.html',
  styleUrl: './lista-corrida.css',
})
export class ListaCorrida {
  listaCorridas = signal<corridaM[]>([]);

  constructor(
    private router: Router,
    private http: CorridaService,
  ) {}

  ngOnInit() {
    this.listarCorridas();
  }

  listarCorridas() {
    this.http.listApi().subscribe({
      next: (dados) => {
        this.listaCorridas.set([...dados].sort((a, b) => a.data.localeCompare(b.data)));
      },
      error: (msgErro) => {
        console.log('Erro ao listar as corridas.', msgErro);
      },
    });
  }

  excluir(corrida: corridaM) {
    if (confirm(`Deseja excluir ${corrida.descricao} da lista? `)) {
      this.http.excluirCorrida(corrida).subscribe({
        next: (dados) => {
          this.listaCorridas.update((elem) => elem.filter((a) => a.id !== corrida.id));

          console.log('Corrida excluída com Sucesso ', dados);
        },
        error: (msgErro) => {
          console.log('Erro ao Excluir a corrida ', msgErro);
        },
      });
    }
    this.ngOnInit();
  }

  levaDados(corrida: corridaM) {
    this.router.navigate(['/editaCorrida', corrida.id]);
  }

  inscreveDados(corrida: corridaM) {
    this.router.navigate(['/inscreve', corrida.id]);
  }
}
