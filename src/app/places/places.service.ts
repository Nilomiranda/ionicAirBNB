// tslint:disable: max-line-length

import { Injectable } from '@angular/core';
import { Place } from './places.model';

@Injectable({
  providedIn: 'root'
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
      'https://www.google.com/imgres?imgurl=http%3A%2F%2Fspacing.ca%2Fvancouver%2Fwp-content%2Fuploads%2Fsites%2F6%2F2014%2F06%2FStanley-Park_600.jpg&imgrefurl=http%3A%2F%2Fspacing.ca%2Fvancouver%2F2014%2F07%2F07%2Fmakes-stanley-park-number-one-park-world%2F&docid=chejbRI0SnaIOM&tbnid=vJ0mgZSbZNNrVM%3A&vet=10ahUKEwj8uKPch7DjAhUx01kKHcaVAwAQMwiAASgDMAM..i&w=600&h=336&bih=657&biw=1366&q=stanley%20park&ved=0ahUKEwj8uKPch7DjAhUx01kKHcaVAwAQMwiAASgDMAM&iact=mrc&uact=8',
      1000000
    ),
    new Place(
      'p3',
      'Empire State Building',
      'When stressed out, just jump from the top, you will certainly die',
      'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F1%2F10%2FEmpire_State_Building_%2528aerial_view%2529.jpg%2F250px-Empire_State_Building_%2528aerial_view%2529.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FEmpire_State_Building&docid=XfQII-lYE0auyM&tbnid=hw6mZmsNnIbX4M%3A&vet=10ahUKEwj5obn-h7DjAhUntlkKHdAdAOUQMwh-KAAwAA..i&w=250&h=375&bih=657&biw=1366&q=empire%20state%20building&ved=0ahUKEwj5obn-h7DjAhUntlkKHdAdAOUQMwh-KAAwAA&iact=mrc&uact=8',
      1000
    )
  ];

  constructor() { }

  get places() {
    return [...this._places];
  }
}
