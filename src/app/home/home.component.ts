import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/card';
import { Tile, CardsColsSize } from '../../models/Tile';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  grid: Tile[] = [];
  cards: Card[] = [
  {
    width: '300px',
    title: 'Angular Rover',
    image: '/assets/images/angular_rover_01.PNG',
    content: 'The marthian rover was sended to save the planet',
    link: 'https://mars-rover.strin.es/',
    social: '/',
  },
  {
    width: '300px',
    title: 'Gnomme Town',
    image: '/assets/images/gnomme_town_01.PNG',
    content: 'Whole gnommes town information, works, age...',
    link: 'https://gnomme-town.strin.es/',
    social: '/',
  },
  {
    width: '300px',
    title: 'React Learning',
    image: '/assets/images/react_login_01.PNG',
    content: 'Async data, OAUTH-2 login, some cruds, ...',
    link: 'https://react.strin.es/',
    social: '/',
  }
]

  constructor() { }

  ngOnInit(): void {
    this.cards.forEach((card, index) => {
      this.grid.push({
        id: card.title,
        cols: CardsColsSize,
        rows: this.cards.length / CardsColsSize
      })
    })
    this.grid = [
      {
        id: 'cards',
        cols: CardsColsSize,
        rows: this.cards.length / CardsColsSize,
      },
    ]
  }
}
