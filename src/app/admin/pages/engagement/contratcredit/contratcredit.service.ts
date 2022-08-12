import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ContratcreditService {

  constructor(private http: HttpClient) { }

  API = 'http://localhost:8084';

  public registerContrat(contratData: any) {
    return this.http.post(this.API + '/contrat', contratData);
  }

  public getContrat() {

    return this.http.get(this.API + '/contrat');
  }

  public deleteContrat(idContrat: any) {

    return this.http.delete(this.API + '/contrat/{idContrat}?idContrat=' + idContrat);
  }

  public updateContrat(contrat: any) {

    return this.http.put(this.API + '/contrat', contrat);
  }


  public registerContratcredit(contratcreditData: any) {
    return this.http.post(this.API + '/contrat-credit', contratcreditData);
  }

  public getContratcredit() {
    return this.http.get(this.API + '/contrat-credit');
  }

  public deleteContratcredit(idContrat: any) {
     return this.http.delete(this.API + '/contrat-credit/{idContrat}?idContrat=' + idContrat);
  }

  public updateContratcredit(contratcredit: any) {
    return this.http.put(this.API + '/contrat-credit', contratcredit);
  }



}
