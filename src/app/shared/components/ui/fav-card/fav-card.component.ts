import { Component, inject, Input, Output, output } from '@angular/core';
import { ItrendingMovie } from '../../../../featured/interfaces/itrending-movie';
import { IMovie } from '../../../interfaces/movie';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../../core/services/auth/auth.service';
import { IMovieDetails } from '../../../../featured/interfaces/imovie-details';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-fav-card',
  imports: [RouterLink],
  templateUrl: './fav-card.component.html',
  styleUrl: './fav-card.component.css',
})
export class FavCardComponent {



}
