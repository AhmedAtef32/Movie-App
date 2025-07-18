import { Component, inject, OnInit } from '@angular/core';
import { CardOneMovieComponent } from "../../../../../shared/components/ui/card-one-movie/card-one-movie.component";
import { MoivesService } from '../../../../services/moive/moives.service';
import { IMovie } from '../../../../../shared/interfaces/movie';

@Component({
  selector: 'app-one-movie',
  imports: [CardOneMovieComponent],
  templateUrl: './one-movie.component.html',
  styleUrl: './one-movie.component.css'
})
export class OneMovieComponent implements OnInit {

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
