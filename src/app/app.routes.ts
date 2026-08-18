import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Cadastro } from './components/cadastro/cadastro';
import { ListaAtleta } from './components/lista-atleta/lista-atleta';

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
];
