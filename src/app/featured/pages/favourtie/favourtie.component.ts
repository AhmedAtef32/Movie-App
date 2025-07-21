import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IMovieDetails } from '../../interfaces/imovie-details';
import { MoivesService } from '../../services/moive/moives.service';
import { FavCardComponent } from '../../../shared/components/ui/fav-card/fav-card.component';
import { AuthService } from '../../../core/services/auth/auth.service';

@Component({
  selector: 'app-favourtie',
  imports: [RouterLink, FavCardComponent],
  templateUrl: './favourtie.component.html',
  styleUrl: './favourtie.component.css',
})
export class FavourtieComponent {
  constructor() {
    if (localStorage.getItem('favoriteItems')) {
      this.favItems = JSON.parse(localStorage.getItem('favoriteItems')!);
    }
  }
  private readonly _moivesService = inject(MoivesService);
  private readonly _AuthService = inject(AuthService);
  favItems: IMovieDetails[] = [];
  imagePath: string = this._moivesService.PathImageUrlWithLowQuality;

  removeItem(movie: IMovieDetails) {
    this._AuthService.removeFromFavorites(movie);
    if(localStorage.getItem('favoriteItems')){
      this._AuthService.favoriteitems$.set(JSON.parse(localStorage.getItem('favoriteItems')!));
      this.favItems = this._AuthService.favoriteitems$();
    }
  }
}
