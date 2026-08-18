import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AtletaService } from '../../services/atleta-service';
import { AtletaM } from '../../Models/atletaModel';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  imports: [FormsModule],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {
  id = 0
  nome = ''
  cpf = ''
  sexo = ''
  cep = 0.0
  rua = ''
  bairro = ''
  uf = ''
  cidade = ''

  editar = false 
  idAtleta = 0
  // CONSTRUTOR
  constructor(private atletaService: AtletaService, private route: ActivatedRoute, private cdr: ChangeDetectorRef) { }

  exibeDados() {
    console.log(this.nome, this.cpf, this.sexo, this.cep)
  }

  ngOnInit() {
    this.idAtleta = Number(this.route.snapshot.paramMap.get('id'))

    if (this.idAtleta > 0) {
      this.editar = true
      this.carregaInputs(this.idAtleta)
    }
  }

  carregaInputs(idAtleta : number) {
    this.atletaService.listarAtleta(idAtleta)
    .subscribe({
      next: (objAtleta) => {
        this.id = objAtleta.id
        this.nome = objAtleta.nome
        this.cpf = objAtleta.cpf
        this.sexo = objAtleta.sexo
        this.cep = objAtleta.cep
        this.rua = objAtleta.rua
        this.bairro = objAtleta.bairro
        this.cidade = objAtleta.cidade
        this.uf = objAtleta.uf

        this.cdr.detectChanges()
    }, error: (msgErro) => {
      console.log("Erro ao listar o atleta", msgErro)
    }
    })
  }

 saveAtleta() {
    const AtletaP = new AtletaM()
    AtletaP.nome = this.nome
    AtletaP.cpf = this.cpf
    AtletaP.sexo = this.sexo
    AtletaP.cep = this.cep
    AtletaP.rua = this.rua
    AtletaP.bairro = this.bairro
    AtletaP.cidade = this.cidade
    AtletaP.uf = this.uf

    if (!this.editar) {
      this.atletaService.adicionarAtleta(AtletaP)
        .subscribe({
          next: (resposta) => {
            console.log(resposta)
          },
          error: (msgErro) => {
            console.log("Erro ao cadastrar  o atleta ", msgErro)
          }
        })
    } else {
      AtletaP.id = this.idAtleta
      
      this.atletaService.alterarAtleta(AtletaP)
        .subscribe({
          next: (resposta) => {
            console.log(AtletaP)

            console.log(resposta)
          },
          error: (msgErro) => {
            console.log("Erro ao alterar  o atleta ", msgErro)
          }
        })

    }

    this.limparAtributos()

  }

  listarAtleta(idAtleta : number) {
    this.atletaService.listarAtleta(idAtleta)
      .subscribe({
        next: (dados) => {
          console.table(dados)
        },
        error: (msgErro) => {
          console.log("Erro ao listar atletas ", msgErro)
        }
      })
  }

  limparAtributos() {
    this.nome = ''
    this.cpf = ''
    this.sexo = ''
    this.cep = 0
    this.rua = ''
    this.bairro = ''
    this.cidade = ''
    this.uf = ''
  }



}
  
  

  /*
  saveAtleta(){
    const atletaP = new AtletaM()
    atletaP.nome = this.nome
    atletaP.cpf = this.cpf
    atletaP.sexo = this.sexo
    atletaP.cep = this.cep
    atletaP.rua = this.rua
    atletaP.bairro = this.bairro
    atletaP.uf = this.uf
    atletaP.cidade = this.cidade

    this.atletaService.push(atletaP)
  }

// commit push


}
*/