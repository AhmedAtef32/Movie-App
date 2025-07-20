import { Component, inject } from '@angular/core';
import { IMovie } from '../../../../../shared/interfaces/movie';
import { MoivesService } from '../../../../services/moive/moives.service';
import { CardOneMovieComponent } from "../../../../../shared/components/ui/card-one-movie/card-one-movie.component";

@Component({
  selector: 'app-single-movie',
  imports: [CardOneMovieComponent],
  templateUrl: './single-movie.component.html',
  styleUrl: './single-movie.component.css'
})
export class SingleMovieComponent {
  private readonly _moivesService = inject(MoivesService)
  idMovies: number[] = [541671 , 1087192 , 986056 , 846422]
  idMovie!: number
  imagePath:string = this._moivesService.PathImageUrl
  movie!:IMovie

ngOnInit(): void {

  this.idMovie = this.idMovies[Math.floor(Math.random() * this.idMovies.length)];
  this.getMovie();


}

getMovie(){
  this._moivesService.getMovieDetails(this.idMovie).subscribe({
    next: (res) => {
      this.movie = res
      console.log(this.movie)
    }
  });
}
}
