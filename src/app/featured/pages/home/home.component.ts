import { Component } from '@angular/core';
import { MainSliderComponent } from './components/main-slider/main-slider.component';
import { TrendingThisWeekComponent } from "./components/trending-this-week/trending-this-week.component";

@Component({
  selector: 'app-home',
  imports: [MainSliderComponent, TrendingThisWeekComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
