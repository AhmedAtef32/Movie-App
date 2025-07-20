import { Component, inject } from '@angular/core';
import { MainSliderComponent } from "../home/components/main-slider/main-slider.component";
import { MoivesService } from '../../services/moive/moives.service';
import { TopTenComponent } from "../home/components/top-ten/top-ten.component";
import { ComingSoonComponent } from "./components/coming-soon/coming-soon.component";
import { SingleMovieComponent } from "./components/single-movie/single-movie.component";
import { ActionComponent } from "../home/components/action/action.component";

@Component({
  selector: 'app-movie',
  imports: [MainSliderComponent, TopTenComponent, ComingSoonComponent, SingleMovieComponent, ActionComponent],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent {

  private readonly _moivesService = inject(MoivesService)

  imagePath:string = this._moivesService.PathImageUrlWithLowQuality




}
