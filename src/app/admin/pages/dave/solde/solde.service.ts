import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SoldeService {

  constructor(private http: HttpClient) { }


  API = 'http://localhost:8083';

  public registerSolde(soldeCompteData: any) {
    return this.http.post(this.API + '/soldeCompte', soldeCompteData);
  }

  public getSolde() {
    return this.http.get(this.API + '/soldeCompte');
  }

  public deleteSolde(idSoldeCompte: any) {
    return this.http.delete(this.API + '/soldeCompte/{idSoldeCompte}?idSoldeCompte=' + idSoldeCompte);
  }

  public updateSolde(soldeCompte: any) {
    return this.http.put(this.API + '/soldeCompte', soldeCompte);
  }


}
