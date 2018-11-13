import { Injectable } from '@angular/core';
import { quotes } from '../shared/quotes';
import { Quote } from '../quotes-list/quote.model';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  quotesList: Quote[] = quotes;
  constructor(
  ) {}

  getQuotes(): Quote[] {
    return this.quotesList;
  }

}
