import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../model/usuario';

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login.usuario.component.html',
  styleUrls: ['./login.usuario.component.css']
})
export class LoginUsuarioComponente implements OnInit {
  
  public usuario;

  ngOnInit(): void {
    this.usuario = new Usuario();
  }

  public ativarBtnEnviar(): boolean {
    return  this.usuario.email != null && this.usuario.email != "" && this.usuario.senha != null && this.usuario.senha != "";
  }

  public logar() {
    console.log(this.usuario.nome, this.usuario.sobrenome, this.usuario.email, this.usuario.senha);
  }
}
