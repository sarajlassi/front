import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  API = 'http://localhost:8082';

  public registerContact(contactData: any) {
    return this.http.post(this.API + '/contact', contactData);
  }

  public getContact() {
    return this.http.get(this.API + '/contact');
  }

  public deleteContact(idContact: any) {
    return this.http.delete(this.API + '/contact/{idContact}?idContact=' + idContact);
  }

  public updateContact(contact: any) {
    return this.http.put(this.API + '/contact', contact);
  }

}
