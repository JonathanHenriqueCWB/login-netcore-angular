import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { LoginUsuarioComponente } from './usuario/login/login.usuario.component';
import { CadastroUsuarioComponent } from './usuario/cadastro/cadastro.usuario.component';
import { UsuarioService } from './services/usuario.service';
import { ProdutoComponent } from './produto/produto.component';
import { GuardaRotas } from './Authorization/guarda.rotas';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    LoginUsuarioComponente,
    CadastroUsuarioComponent,
    ProdutoComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'usuario-login', component: LoginUsuarioComponente },
      { path: 'usuario-cadastrar', component: CadastroUsuarioComponent },
      { path: 'produto', component: ProdutoComponent, canActivate: [GuardaRotas] },
    ])
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
