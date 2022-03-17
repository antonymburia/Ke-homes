import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { House } from '../classes/house';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetHouseService {
  api_url = ''
  

  constructor(public http: HttpClient) { }
  
  get_houses(): Observable<any>{
    return this.http.get(this.api_url);
  }
}
