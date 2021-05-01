
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Member } from '../_models/member';


/*const httpOptions ={
  headers : new HttpHeaders({

    Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user'))?.token
   //Authorization:'Bearer '+ JSON.parse(localStorage.getItem('user')?localStorage.getItem('user')!:"{}").token
  // Authorization: 'Bearer '+ JSON.parse(localStorage.getItem('user' )).token
    
  })
}*/
@Injectable({
  providedIn: 'root'
})
export class MembersService {
 baseUrl = environment.apiUrl;
  
  constructor(private http: HttpClient) { }
  //constructor() { }
  
  getMembers()
  {
    //return this.http.get<Member[]> (this.baseUrl + 'users',  httpOptions);
    return this.http.get<Member[]> (this.baseUrl + 'users');
  }
  getMember(username:string)
  {
  //  return this.http.get<Member> (this.baseUrl + 'users/' + username,  httpOptions);
    return this.http.get<Member> (this.baseUrl + 'users/' + username);
  }
}
