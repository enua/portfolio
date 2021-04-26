import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/card';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
  cards: Card[] = [{
    width: '300px',
    title: 'Angular Rover',
    image: '/assets/images/angular_rover_01.PNG',
    content: 'The marthian rover was sended to save the planet',
    link: '/angular-rover/',
    social: '/',
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
