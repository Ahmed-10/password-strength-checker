import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  password: string = '';
  score: number = 0;
  length: number = 0;

  constructor() { }

  onKey(event) {
    this.password = event.target.value;
  }
}
