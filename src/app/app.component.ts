import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MarketPlace-FrontEnd';
  titlePage = "MarketPlace"

  // bodyClick(event: Event){
  //   let target = event.target as HTMLElement
  //   let nav = document.querySelector('topbar__navigation') as HTMLElement
  //   if (nav != target && nav.classList.contains('show-navigation'))
  //     nav.classList.toggle('show-navigation')
  //   document.body.style.backgroundColor = '#ff0000'
  // }
}
