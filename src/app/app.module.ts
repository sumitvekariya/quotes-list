import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Imported Custom Created Modules
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MomentDateAdapter, MomentDateModule } from '@angular/material-moment-adapter';

// Imported Custom Created Components
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material/material.module';
import { MAT_DATE_LOCALE, MAT_DATE_FORMATS, DateAdapter } from '@angular/material';
import { QuotesListComponent } from './quotes-list/quotes-list.component';
import { CommonService } from './shared/common.service';
import { CommonModule } from '@angular/common';
import { FirstLetterCapitalDirective } from './shared/first-letter-capital.directive';

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@NgModule({
  declarations: [
    AppComponent,
    QuotesListComponent,
    FirstLetterCapitalDirective
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    MomentDateModule,
  ],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
    CommonService
  ],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
