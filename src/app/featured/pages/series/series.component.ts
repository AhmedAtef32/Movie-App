import { Component } from '@angular/core';
import { SeriesMainSliderComponent } from "./components/series-main-slider/series-main-slider.component";
import { TopTenComponent } from "../home/components/top-ten/top-ten.component";
import { UpcomingSeriesComponent } from "./components/upcoming-series/upcoming-series.component";
import { SingleSeriesComponent } from "./components/single-series/single-series.component";
import { DramaSeriesComponent } from "./components/drama-series/drama-series.component";

@Component({
  selector: 'app-series',
  imports: [SeriesMainSliderComponent, TopTenComponent, UpcomingSeriesComponent, SingleSeriesComponent, DramaSeriesComponent],
  templateUrl: './series.component.html',
  styleUrl: './series.component.css'
})
export class SeriesComponent {

}
