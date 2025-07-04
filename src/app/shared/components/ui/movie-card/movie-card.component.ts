import { Component, Input } from '@angular/core';
import { ItrendingMovie } from '../../../../featured/interfaces/itrending-movie';

@Component({
  selector: 'app-movie-card',
  imports: [],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent {


  @Input({required: true}) moive!:ItrendingMovie;
  @Input({required: true}) imagePath!:string;

}
