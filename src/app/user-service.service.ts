import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }

  public doRegistration(user)
  {
    return this.http.post("http://localhost:8080/register",user, {responseType: "text" as "json"});
  }

  public getAllUser()
  {
    return this.http.get("http://localhost:8080/alluser");
  }

  public getUserByUsername(username)
  {
    return this.http.get("http://localhost:8080/getUser/"+username);
  }

  // public doRegistration(user: User): Observable<any>
  // {
  //   return this.http.post("http://localhost/8080/register",user);
  // }
}
