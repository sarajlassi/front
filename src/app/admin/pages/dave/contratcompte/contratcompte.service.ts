import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ContratcompteService {

  constructor(private http: HttpClient) { }


  API = 'http://localhost:8083';

  public registerContrat(contratData: any) {
    return this.http.post(this.API + '/contrat', contratData);
  }

  public getContrat() {

    return this.http.get(this.API + '/contrat');
  }

  public deleteContrat(idClient: any) {

    return this.http.delete(this.API + '/contrat/{idContrat}?idContrat=' + idClient);
  }

  public updateContrat(contrat: any) {

    return this.http.put(this.API + '/contrat', contrat);
  }

  public registerContratcompte(contratcompteData: any) {
    return this.http.post(this.API + '/contrat-compte', contratcompteData);
  }

  public getContratcompte() {
    return this.http.get(this.API + '/contrat-compte');
  }

  public deleteContratcompte(idContrat: any) {
     return this.http.delete(this.API + '/contrat-compte/{idContrat}?idContrat=' + idContrat);
  }

  public updateContratcompte(contratcompte: any) {
    return this.http.put(this.API + '/contrat-compte', contratcompte);
  }



}


