import { Component, OnInit } from '@angular/core';
import { resourceLimits } from 'worker_threads';
import { House } from '../classes/house';
import { GetHouseService } from '../services/get-house.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  house!: House[];


  constructor(public housefetch: GetHouseService) { }
  house_results(){
    this.housefetch.get_houses().subscribe(
      data => {
        this.house = data;
        return (this.house);
      }
    )
  }
ngOnInit(): void {
}

}
