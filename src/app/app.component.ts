import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // any properties here can be used in the HTML
  // we can name a property like below but its not really typescript
  // name = "Valeria";

  // instead if we want to follow typescript we do this:
  // name: string = "Valeria";

  // we can have methods inside our components

  // constructor() {
  //   this.changeName("John");
  // }

  // changeName(name: string): void {
  //   this.name = name;
  // }
}
