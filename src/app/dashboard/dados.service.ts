import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  readonly dados = [
    ['Janeiro', 33],
    ['Fevereiro', 60],
    ['Março', 49],
    ['Abril', 28],
    ['Maio', 70],
    ['Junho', 23]
    
  ]

  constructor() { }

  /**
   * Retorna um observable contendo os dados a serem exibidos na gráfico
   * 
   * @return Observable<any>
   */
  obterDados(): Observable<any>{
    return new Observable(observable => {
      observable.next(this.dados)
      observable.complete()
    })
  }
}
