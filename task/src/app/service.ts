import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from './user_data';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class Service {
  private Url = 'http://jsonplaceholder.typicode.com/users';
  constructor( private http: HttpClient ) { }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.Url);
  }
}
