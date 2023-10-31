import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // Atualize a URL para corresponder à sua configuração do servidor Node.js

  constructor(private http: HttpClient) {}

  sendDataToServer(data: any) {
    // Use a URL completa, incluindo a rota no servidor Node.js
    const url = 'http://localhost:3000/data';
    return this.http.post(url, data);
  }

  getDataFromServer() {
    // Use a URL completa, incluindo a rota no servidor Node.js
    const url = 'http://localhost:3000/data';
    return this.http.get(url);
  }
}
