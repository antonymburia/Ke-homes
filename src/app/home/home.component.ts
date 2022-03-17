import { Component, OnInit } from '@angular/core';
import { House } from '../classes/house';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  House!: House[];


  constructor() { }

  ngOnInit(): void {
  }

}
