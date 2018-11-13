import { NgModule } from '@angular/core';
import {
  MatFormFieldModule,
  MatIconModule,
  MatToolbarModule,
  MatSlideToggleModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatFormFieldModule,
    MatIconModule,
    MatToolbarModule,
    MatSlideToggleModule
  ],
  exports: [
    MatFormFieldModule,
    MatIconModule,
    MatToolbarModule,
    MatSlideToggleModule
  ]
})
export class MaterialModule {}
