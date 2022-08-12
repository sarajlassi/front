import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RefuserserviceService {

  constructor(private http: HttpClient) { }


  API = 'http://localhost:8082';

  public registerClientPhy(clientPhyData: any) {
    return this.http.post(this.API + '/client-physique', clientPhyData);
  }

  public getClientPhy() {

    return this.http.get(this.API + '/client-physique');
  }


  public getClientPhyCin(cin: any) {

    return this.http.get(this.API + '/client-physique-cin/{cin}?cin=' + cin);
  }

  public deleteClientPhy(idClient: any) {

    return this.http.delete(this.API + '/client-physique/{idClient}?idClient=' + idClient);
  }

  public deleteClientPhyCin(cin: any) {

    return this.http.delete(this.API + '/client-physiqueCin/{cin}?cin=' + cin);
  }

  public updateClientPhy(clientPhy: any) {

    return this.http.put(this.API + '/client-physique', clientPhy);
  }

  public registerClientMor(clientMorData: any) {
    return this.http.post(this.API + '/client-moral', clientMorData);
  }

  public getClientMor() {
    return this.http.get(this.API + '/client-moral');
  }

  public deleteClientMor(idClient: any) {
     return this.http.delete(this.API + '/client-moral/{idClient}?idClient=' + idClient);
  }

  public updateClientMor(clientMor: any) {
    return this.http.put(this.API + '/client-moral', clientMor);
  }



}


