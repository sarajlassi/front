import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PaysService {

  constructor(private http: HttpClient) { }

  API = 'http://localhost:8082';

  public registerPays(paysData: any) {
    return this.http.post(this.API + '/pays', paysData);
  }

  public getPays() {
    return this.http.get(this.API + '/pays');
  }

  public deletePays(idPays: any) {
    return this.http.delete(this.API + '/pays/{idPays}?idPays=' + idPays);
  }

  public updatePays(pays: any) {
    return this.http.put(this.API + '/pays', pays);
  }

}
