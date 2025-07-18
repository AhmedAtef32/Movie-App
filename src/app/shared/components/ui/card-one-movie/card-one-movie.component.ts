import { Component, input, InputSignal} from '@angular/core';
import { IMovie } from '../../../interfaces/movie';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-one-movie',
  imports: [RouterLink],
  templateUrl: './card-one-movie.component.html',
  styleUrl: './card-one-movie.component.css'
})
export class CardOneMovieComponent {


  movieOrSeries:InputSignal<IMovie> = input.required()
  imagePath:InputSignal<string> = input.required()
  isThisMovie:InputSignal<boolean> = input.required()

}
