import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private apiserver = "http://localhost:3000/api";

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest() {
    return this.httpClient.get(this.apiserver);
  }

  public testGet(url: string) {
    return this.httpClient.get(url);
  }

}
