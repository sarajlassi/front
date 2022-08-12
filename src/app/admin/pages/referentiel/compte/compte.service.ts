import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CompteService {

  constructor(private http: HttpClient) { }

  API = 'http://localhost:8082';

  public registerCompte(compteBancaireData: any) {
    return this.http.post(this.API + '/compteBancaire', compteBancaireData);
  }

  public getCompte() {
    return this.http.get(this.API + '/compteBancaire');
  }

  public deleteCompte(numCpt: any) {
    return this.http.delete(this.API + '/compteBancaire/{numCpt}?numCpt=' + numCpt);
  }

  public updateCompte(compteBancaire: any) {
    return this.http.put(this.API + '/compteBancaire', compteBancaire);
  }

}