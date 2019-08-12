import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from '../_models/user';

// const httpOptions ={
//   headers : new HttpHeaders({
//     'Authorization' : 'Bearer '+ 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIxNCIsInVuaXF1ZV9uYW1lIjoicm95IiwibmJmIjoxNTY0MTExMDA0LCJleHAiOjE1NjQxOTc0MDQsImlhdCI6MTU2NDExMTAwNH0.Pxj-0AUWXZlbzILsFpdse-pULKbQgRYTe12rdFyEx03BqYkFN1-5LJiSPjlnSFt8EvwMIL3QLp5_R0zfs8FSqg'
//   })
// };

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    //console.log('toke is =>'+ localStorage.getItem('token'));
    //return this.http.get<User[]>(this.baseUrl + 'users', httpOptions);
    return this.http.get<User[]>(this.baseUrl + 'users');

  }

  getUser(id): Observable<User> {
    //return this.http.get<User>(this.baseUrl + 'users/' + id, httpOptions);
    return this.http.get<User>(this.baseUrl + 'users/' + id);
  }

  updateUser(id: number, user: User) {
    return this.http.put(this.baseUrl + 'users/' + id, user);
  }

  setMainPhoto(userId: number, id: number) {
    return this.http.post(this.baseUrl + 'users/' + userId + '/photos/' + id + '/setMain', {});
  }

  deletePhoto(userId: number, id: number) {
    return this.http.delete(this.baseUrl + 'users/' + userId + '/photos/' + id);
  }
}

