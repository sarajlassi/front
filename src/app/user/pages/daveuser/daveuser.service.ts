import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DaveuserService {

  constructor(private http: HttpClient) { }


  API = 'http://localhost:8083';

  public registerComptedave(compteBankData: any) {
    return this.http.post(this.API + '/compteBank', compteBankData);
  }

  public getComptedave() {
    return this.http.get(this.API + '/compteBank');
  }

  public deleteComptedave(numCompte: any) {
    return this.http.delete(this.API + '/compteBank/{numCompte}?numCompte=' + numCompte);
  }

  public updateComptedave(compteBank: any) {
    return this.http.put(this.API + '/compteBank', compteBank);
  }


}
