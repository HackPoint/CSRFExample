import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly _baseUrl = 'https://localhost:7264/api';

  constructor(private readonly httpClient: HttpClient) { }


  getMessage() {
    return this.httpClient.get(`${this._baseUrl}/xsrf-token`);
  }

  getPerson() {
    return this.httpClient.post(`${this._baseUrl}/Person`, { Name: 'Gena', LName: 'S' });
  }
}
