import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AgenceService {

  constructor(private http: HttpClient) { }


  API = 'http://localhost:8082';

  public registerAgence(agenceData: any) {
    return this.http.post(this.API + '/agence', agenceData);
  }

  public getAgence() {
    return this.http.get(this.API + '/agence');
  }

  public deleteAgence(idAgence: any) {
    return this.http.delete(this.API + '/agence/{idAgence}?idAgence=' + idAgence);
  }

  public updateAgence(agence: any) {
    return this.http.put(this.API + '/agence', agence);
  }


}
