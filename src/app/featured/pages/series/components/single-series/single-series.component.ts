import { Component, inject, OnInit } from '@angular/core';
import { IMovie } from '../../../../../shared/interfaces/movie';
import { MoivesService } from '../../../../services/moive/moives.service';
import { CardOneMovieComponent } from "../../../../../shared/components/ui/card-one-movie/card-one-movie.component";
import { SericesService } from '../../../../services/series/serices.service';
import { SkeletonMainSliderComponent } from "../../../../../shared/components/ui/skeleton-main-slider/skeleton-main-slider.component";

@Component({
  selector: 'app-single-series',
  imports: [CardOneMovieComponent, SkeletonMainSliderComponent],
  templateUrl: './single-series.component.html',
  styleUrl: './single-series.component.css'
})
export class SingleSeriesComponent implements OnInit {
  private readonly _moivesService = inject(MoivesService)
  private readonly _sericesService = inject(SericesService)
  idSeries: number[] = [110316 , 93405 , 88329 , 71446]
  idSerie!: number
  imagePath:string = this._moivesService.PathImageUrl
  series!:IMovie

ngOnInit(): void {

  this.idSerie = this.idSeries[Math.floor(Math.random() * this.idSeries.length)];
  this.getMovie();

}

getMovie(){
  this._sericesService.getSeriesDetails(this.idSerie).subscribe({
    next: (res) => {
      this.series = res
    }
  });
}
}
