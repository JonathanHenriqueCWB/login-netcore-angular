import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../model/usuario';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro.usuario.component.html',
  styleUrls: ['./cadastro.usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  public usuario;

  constructor(private usuarioService: UsuarioService) {

  }
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

    this.usuarioService.cadastrar(this.usuario).subscribe(
      data => {
        console.log("Usuario cadastrado com sucesso!");
      },
      err => {
        console.log("Erro ao cadastrar usuario!");
      }
    )

  }
}
