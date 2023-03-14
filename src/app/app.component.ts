import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayDetails: boolean = true;
  logs = [];

  logAllItems() {
    this.logs.push(new Date())
  }
}
