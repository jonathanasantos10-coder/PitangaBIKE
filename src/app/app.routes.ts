import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Cadastro } from './components/cadastro/cadastro';
import { CadastroCorrida } from './components/cadastro-corrida/cadastro-corrida';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: Home
    },
    {
        path: 'cadastro',
        component: Cadastro
    },
    {
        path: 'cCorrida',
        component: CadastroCorrida
    },

];
