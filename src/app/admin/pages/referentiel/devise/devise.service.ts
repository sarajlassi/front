import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DeviseService {

  constructor(private http: HttpClient) { }

  API = 'http://localhost:8082';

  public registerDevise(deviseData: any) {
    return this.http.post(this.API + '/devise', deviseData);
  }

  public getDevises() {
    return this.http.get(this.API + '/devise');
  }

  public deleteDevise(idDevise: any) {
    return this.http.delete(this.API + '/devise/{idDevise}?idDevise=' + idDevise);
  }

  public updateDevises(devise: any) {
    return this.http.put(this.API + '/devise', devise);
  }
}
