import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api } from'../app/interfaces/api';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private api = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) { }

  getAllTasks(){
    const path =`${this.api}/photos`;
    return this.http.get<api[]>(path);
    }
}

