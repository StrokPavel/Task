import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from './user_data';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
//Отправка запроса и получение json-данных с записью в массив.
@Injectable()
export class Service {
  private Url = 'http://jsonplaceholder.typicode.com/users';
  constructor( private http: HttpClient ) { }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.Url);
  }
}
