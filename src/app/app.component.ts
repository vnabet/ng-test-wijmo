import '@grapecity/wijmo.styles/wijmo.css';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import {CollectionView} from '@grapecity/wijmo';
import {WjGridModule} from '@grapecity/wijmo.angular2.grid'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, WjGridModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wijmo';

  data:CollectionView;

  constructor() {
    this.data = new CollectionView(this._getData());
  }

  private _getData() {
    // create some random data
    let countries = 'US,Germany,UK,Japan,Italy,Greece'.split(','),
        data = [];
    for (let i = 0; i < countries.length; i++) {
        data.push({
            id: i,
            country: countries[i],
            sales: Math.random() * 10000,
            expenses: Math.random() * 5000
        });
    }

    return data;
}
}
