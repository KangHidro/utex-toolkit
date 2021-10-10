import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'utex-toolkit';
  constructor() {
    console.log('%cRev. 21.1010.1', 'background: #3f51b5; color: #fff; padding: 5px 10px;');
  }
}
