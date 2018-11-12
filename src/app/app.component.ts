import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CommonService } from './shared/common.service';
import { quotes } from './shared/quotes';
import { NgxMasonryOptions } from 'ngx-masonry';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  quotes = quotes;
  gradients = [
    'linear-gradient(135deg, #C56CD6 0%, #3425AF 100%)',
    'linear-gradient(135deg, #F36265 0%, #961276 100%)',
    'linear-gradient(135deg, #C56CD6 0%, #0470dc 100%)',
    'linear-gradient(135deg, #13f1fc 0%, #3425AF 100%)',
    'linear-gradient(135deg, #fcdf8a 0%, #f38381 100%)',
    'linear-gradient(135deg, #5b247a 0% ,#1bcedf 100%)'
  ];

  solid = [
    '#001f3f',
    '#0074D9',
    '#7FDBFF',
    '#39CCCC',
    '#3D9970',
    '#2ECC40',
    '#01FF70',
    '#FF4136',
    '#85144b',
    '#111111'
  ]
  public masonryOptions: NgxMasonryOptions = {
    transitionDuration: '0.2s',
    gutter: 20,
    resize: true,
    initLayout: true,
    fitWidth: true
  };
  constructor() {}

  generateRandomGradient() {
    const maximum = 9;
    const minimum = 0;
      return this.solid[Math.floor(Math.random() * (maximum - minimum + 1)) + minimum];

  }
  generateGradient() {

    // const newColor1 = this.populate('#');
    // const newColor2 = this.populate('#');
    const angle = Math.round(Math.random() * 360);
    const randomColourOne = '#000000'.replace(/0/g, function() {return (~~(Math.random() * 16)).toString(16); });

    const randomColourTwo = '#000000'.replace(/0/g, function() {return (~~(Math.random() * 16)).toString(16); });

    const gradient = 'linear-gradient(' + 360 + 'deg, ' + randomColourOne + ', ' + randomColourTwo + ')';
    return gradient;
  }

  populate(a) {
    const hexValues = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e' ];
    for (let i = 0; i < 6; i++) {
      const x = Math.round(Math.random() * 14);
      const y = hexValues[x];
      a += y;
    }
    return a;
  }
}
