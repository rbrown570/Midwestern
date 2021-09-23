import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Contact } from "src/_models/contact";

@Injectable({
    providedIn: 'root'
  })
  export class AppService {
    baseUrl = environment.baseUrl;
    constructor(private http: HttpClient) { }

    getCards() {
      return this.http.get(this.baseUrl + 'cards');
    }
    addContact(contact: Contact) {
      return this.http.post(this.baseUrl + 'contact/create', contact);
    }
  }