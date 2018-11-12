import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CommonService } from './shared/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(
    public dialog: MatDialog,
    public commonService: CommonService
  ) {}

  openAddUserDialog() {}

}
