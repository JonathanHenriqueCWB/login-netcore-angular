import { Injectable, Inject, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private _baseUrl: string;
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this._baseUrl = baseUrl;
  }

  get headers(): HttpHeaders {
    return new HttpHeaders().set('content-type', 'application/json');
  }

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
