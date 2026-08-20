import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Cadastro } from './components/cadastro/cadastro';
import { ListaAtleta } from './components/lista-atleta/lista-atleta';
import { CadastroCorrida } from './components/cadastro-corrida/cadastro-corrida';
import { Inscricao } from './components/inscricao/inscricao';
import { ListaCorrida } from './components/lista-corrida/lista-corrida';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'cadastro',
    component: Cadastro,
  },
  {
    path: 'cadastro/:id',
    component: Cadastro,
  },
  {
    path: 'listaatleta',
    component: ListaAtleta,
  },
  {
    path: 'cCorrida',
    component: CadastroCorrida,
  },
  {
    path: 'listacorrida',
    component: ListaCorrida,
  },
  {
    path: 'inscricao',
    component: Inscricao,
  },
    {
    path: 'editaCorrida/:id',
    component: CadastroCorrida,
  },
];
