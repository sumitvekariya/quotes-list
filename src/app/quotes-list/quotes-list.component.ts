import { Component, AfterContentChecked, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import moment from 'moment';
import tippy from 'tippy.js';
import { CommonService } from '../shared/common.service';
import { gradients, solids } from '../shared/constants';

@Component({
  selector: 'app-quotes-list',
  templateUrl: './quotes-list.component.html',
  styleUrls: ['./quotes-list.component.scss']
})
export class QuotesListComponent implements AfterContentChecked, OnInit, OnChanges {

  quotes = [];
  @Input() isGradient: boolean = true;
  gradients: string[] = gradients;
  solids: string[] = solids;

  constructor(private commonService: CommonService) {
    console.log(this.isGradient);

  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    this.isGradient = changes.isGradient.currentValue;
    this.quotes.forEach(q => {
      q['solid'] = this.generateRandomSolidOrGradient();
    });
  }


  ngAfterContentChecked() {
    this.quotes.forEach(q => {
      tippy('.intro' + q.id, {
        content: this.prepareIntro(q.author.intro),
        delay: 100,
        arrow: true,
        arrowType: 'round',
        size: 'large',
        duration: 500,
        animation: 'scale'
      });
    });
  }

  ngOnInit() {
    console.log(this.isGradient);
    this.quotes = this.commonService.getQuotes();
    this.quotes.forEach(q => {
      q['solid'] = this.generateRandomSolidOrGradient();
    });
  }

  prepareIntro(intro: string) {
    return `
    <h2 style="font-family: roboto;"><i class="fas fa-address-card"></i><span> Introduction</span><h2>
    <p style="font-family: roboto; font-size: 15px; text-align: justify">${intro}</p>
    `;
  }

  generateRandomSolidOrGradient() {
    const maximum = 9;
    const minimum = 0;
    const index = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    return !this.isGradient ? this.gradients[index] : this.solids[index];
  }
  // generateGradient() {
  //   const angle = Math.round(Math.random() * 360);
  //   const randomColourOne = '#000000'.replace(/0/g, (~~(Math.random() * 16)).toString(16));

  //   const randomColourTwo = '#000000'.replace(/0/g, (~~(Math.random() * 16)).toString(16));

  //   const gradient = 'linear-gradient(' + angle + 'deg, ' + randomColourOne + ', ' + randomColourTwo + ')';
  //   return gradient;
  // }

  getDate(date) {
    return moment(date).format('MMM Do YYYY');
  }
}
