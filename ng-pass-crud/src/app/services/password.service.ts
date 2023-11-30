import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Password } from '../models/password.model';

const baseUrl = '/api/passwords';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Password[]> {
    return this.http.get<Password[]>(baseUrl);
  }

  get(id: any): Observable<Password> {
    return this.http.get<Password>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByCompany(company: any): Observable<Password[]> {
    return this.http.get<Password[]>(`${baseUrl}?company=${company}`);
  }
}