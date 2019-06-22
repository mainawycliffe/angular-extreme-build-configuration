import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Logging } from './logging';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = environment.title;

  construct() {}

  ngOnInit() {
    // log something here
    Logging.Log();
  }
}
