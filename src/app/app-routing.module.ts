import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { NaoEncontradaComponent } from './nao-encontrada/nao-encontrada.component';

const routes: Routes = [
  { path: 'produtos', loadChildren: () => import('./produtos/produtos.module').then(m => m.ProdutosModule) },
  { path: "", redirectTo:"produtos", pathMatch: "full"},  // vai redirecionar a pagina de produtos para a pagina principal//
  { path: 'carrinho', loadChildren: () => import('./carrinho/carrinho.module').then(m => m.CarrinhoModule) }, 
  { path: 'contato', loadChildren: () => import('./contato/contato.module').then(m => m.ContatoModule)},
  { path: "**", component:NaoEncontradaComponent} // quando uma rota que nao esteja cadastrada for colocada na url mostrará pagina nao encontrada//


];

  
@NgModule({
  declarations: [],
  imports: [                          //tem que fazer o importe do RouterModule lá encima
     RouterModule.forRoot(routes)     //adiciona aqui o RouterModule para recebes as rotas das variaveis//
  ],
  exports: [
    RouterModule         // do mesmo jeito que fez o import acima, deve exportar o RouterModule//
  ]
   
  })
export class AppRoutingModule { }
