import { Component, Input } from '@angular/core';
import { ItrendingMovie } from '../../../../featured/interfaces/itrending-movie';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  imports: [RouterLink],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent {


  @Input({required: true}) moive!:ItrendingMovie;
  @Input({required: true}) imagePath!:string;
  @Input({required: true}) type!:string;

}
