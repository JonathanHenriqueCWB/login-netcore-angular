import { Injectable, Inject, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private _baseUrl: string;
  private _usuario: Usuario

  // Propriedade criar uma sessão
  set usuario(usuario: Usuario) {
    sessionStorage.setItem('usuario-autenticado', JSON.stringify(usuario));
    this._usuario = usuario;
  }

  get usuario(): Usuario {
    let usuario_json = sessionStorage.getItem('usuario-autenticado');
    this._usuario = JSON.parse(usuario_json);
    return this._usuario;
  }


  // Metodos verificar e limpar sessão
  public verificarSessao(): boolean {
    return this._usuario != null && this._usuario.email != "" && this.usuario.senha != "";
  }

  public limparSessao() {
    sessionStorage.setItem('usuario-autenticado', '');
    this._usuario = null;
  }



  // Propriedade para o cabeçalho da requisiçao
  get headers(): HttpHeaders {
    return new HttpHeaders().set('content-type', 'application/json');
  }

  // Construtor e injeção de dependencias
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this._baseUrl = baseUrl;
  }





  // Requições
  public cadastrar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this._baseUrl + "api/usuario", JSON.stringify(usuario), { headers: this.headers });
  }
  public listar() {

  }
  public atualizar() {

  }
  public deletar() {

  }
}
