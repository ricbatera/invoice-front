import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { payload } from '../novo-boleto/novo-boleto.component';

@Injectable({
  providedIn: 'root'
})

export class DatabaseService {

  API_URL = environment.URLSERVIDOR;
  constructor(private httpClient: HttpClient) { }
   // Headers
   httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  novaConta(payload: payload): Observable<payload> {
    return this.httpClient.post<payload>(this.API_URL+"reader/new-boleto", JSON.stringify(payload), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError))
  }

  // getDevedoresFull(): Observable<Devedor[]> {
  //   return this.httpClient.get<Devedor[]>(`${this.API_URL}cadastros/devedor/listar-devedores`);
  // }
  // getitensSaida(mes: number, ano: number): Observable<ItemListaSaidaApi[]> {
  //   return this.httpClient.get<ItemListaSaidaApi[]>(`${this.API_URL}saidas/listar-mensal?mes=${mes}&ano=${ano}&tags=All`);
  // }
  // getitensEntrada(mes: number, ano: number): Observable<ItemListaEntradaApi[]> {
  //   return this.httpClient.get<ItemListaEntradaApi[]>(`${this.API_URL}entradas/listar-mensal?mes=${mes}&ano=${ano}`);
  // }


    // Manipulação de erros
    handleError(error: HttpErrorResponse) {
      console.log(error)
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        // Erro ocorreu no lado do client
        errorMessage = error.error.message;
      } else {
        // Erro ocorreu no lado do servidor
        errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
      }
      console.log(errorMessage);
      return throwError(errorMessage);
    };
}
