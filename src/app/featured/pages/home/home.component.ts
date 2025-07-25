import { Component } from '@angular/core';
import { MainSliderComponent } from './components/main-slider/main-slider.component';
import { TrendingThisWeekComponent } from "./components/trending-this-week/trending-this-week.component";
import { TopTenComponent } from "./components/top-ten/top-ten.component";
import { ActionComponent } from "./components/action/action.component";
import { OneMovieComponent } from "./components/one-movie/one-movie.component";

@Component({
  selector: 'app-home',
  imports: [MainSliderComponent, TrendingThisWeekComponent, TopTenComponent, ActionComponent, OneMovieComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
