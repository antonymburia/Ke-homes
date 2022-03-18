import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../classes/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetUserService {
  api_url = 'https://ke-homes.herokuapp.com/'

  constructor(public http: HttpClient) { }
  
  get_User(): Observable<any>{
    return this.http.get(this.api_url);
  }
}
