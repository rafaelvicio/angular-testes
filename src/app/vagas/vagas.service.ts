import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Vaga } from './vaga.model';

@Injectable({
  providedIn: 'root'
})
export class VagasService {

  constructor(private http: HttpClient) { }


public getEmpresas(): Observable<Vaga[]> {
  return this.http.get<Vaga[]>('http://www.mocky.io/v2/5b3e62303000009405abc6c4');
}

public GetTopEmpresa(): Observable<Vaga> {
  const empresa = this.http.get<Vaga>('http://www.mocky.io/v2/5b3e791d3000006400abc70c');
  if (empresa != null) {
    return empresa;
  } else {
    return null;
  }
}

}
