import { Component, OnInit } from '@angular/core';
import { GetHouseService } from '../services/get-house.service';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
