import { Component, Input } from '@angular/core';
import { ItrendingMovie } from '../../../../featured/interfaces/itrending-movie';
import { IMovie } from '../../../interfaces/movie';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search-card',
  imports: [RouterLink],
  templateUrl: './search-card.component.html',
  styleUrl: './search-card.component.css'
})
export class SearchCardComponent {

  @Input({required: true}) moive!:ItrendingMovie | IMovie;
  @Input({required: true}) imagePath!:string;

}
