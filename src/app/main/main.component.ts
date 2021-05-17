import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/card';
import { CardsColsSize, Tile } from '../../models/Tile';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
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
