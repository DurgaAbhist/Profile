import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'profile';

  slides = [
    {'component': '<about></about>'},
    {'component': '<experience></experience>'},
    {'component': '<projects></projects>'},
    {'component': '<research></research>'}
  ]
}
