import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../model/usuario';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro.usuario.component.html',
  styleUrls: ['./cadastro.usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  public usuario;

  ngOnInit(): void {
    this.usuario = new Usuario();
  }

  public ativarBtnEnviar(): boolean {
    return this.usuario.nome != null && this.usuario.nome != ""
      && this.usuario.sobrenome != null && this.usuario.sobrenome != ""
      && this.usuario.email != null && this.usuario.email != ""
      && this.usuario.senha != null && this.usuario.senha != "";
  }

  public cadastrar() {
    console.log(this.usuario.nome, this.usuario.sobrenome, this.usuario.email, this.usuario.senha);
  }
}
