import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080/api/users';
  constructor(private http :HttpClient) { }


  createUser(user:Object):Observable<Object>
  {
    console.log(user.valueOf());
    console.log(this.http.get(`http://localhost:8080/api/users/create`,user));
    return this.http.post(`http://localhost:8080/api/users/create`,user);
  }
}
