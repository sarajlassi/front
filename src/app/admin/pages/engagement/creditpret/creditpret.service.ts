import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CreditpretService {

  constructor(private http: HttpClient) { }

  API = 'http://localhost:8084';

  public registerCreditpret(creditpretData: any) {
    return this.http.post(this.API + '/credit-pret', creditpretData);
  }

  public getCreditpret() {
    return this.http.get(this.API + '/credit-pret');
  }

  public deleteCreditpret(idContrat: any) {
    return this.http.delete(this.API + '/credit-pret/{idContrat}?idContrat=' + idContrat);
  }

  public updateCreditpret(creditpret: any) {
    return this.http.put(this.API + '/credit-pret', creditpret);
  }

}
