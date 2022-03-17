import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { House } from '../classes/house';

@Injectable({
  providedIn: 'root'
})
export class GetHouseService {
  api_url = ''

  constructor() { }
}
