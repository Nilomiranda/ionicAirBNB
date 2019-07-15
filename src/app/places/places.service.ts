// tslint:disable: max-line-length

import { Injectable } from '@angular/core';
import { Place } from './places.model';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  // tslint:disable-next-line: variable-name
  private _places: Place[] = [
    new Place(
      'p1',
      'Cohab 2',
      'The best place to live in Sao Paulo',
      'https://cohab2ativa.files.wordpress.com/2015/09/c2a-cohab01.jpg',
      200
    ),
    new Place(
      'p2',
      'Stanley Park',
      'I dare you to live inside this gigantic park',
      'http://spacing.ca/vancouver/wp-content/uploads/sites/6/2014/06/Stanley-Park_600.jpg',
      1000000
    ),
    new Place(
      'p3',
      'Empire State Building',
      'When stressed out, just jump from the top, you will certainly die',
      'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/b6/7c/07.jpg',
      1000
    ),
  ];

  constructor() {}

  getPlace(id: string) {
    return { ...this._places.find(p => p.id === id) };
  }

  get places() {
    return [...this._places];
  }
}
