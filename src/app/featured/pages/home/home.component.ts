import { Component } from '@angular/core';
import { MainSliderComponent } from './components/main-slider/main-slider.component';
import { TrendingThisWeekComponent } from "./components/trending-this-week/trending-this-week.component";
import { TopTenComponent } from "./components/top-ten/top-ten.component";

@Component({
  selector: 'app-home',
  imports: [MainSliderComponent, TrendingThisWeekComponent, TopTenComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
