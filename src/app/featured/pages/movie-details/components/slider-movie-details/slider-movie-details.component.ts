import {
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  inject,
  Input,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MoivesService } from '../../../../services/moive/moives.service';
import { IMovieDetails } from '../../../../interfaces/imovie-details';
import { IMovieVideos } from '../../../../interfaces/Imovie-videos';
import { IMovieImages } from '../../../../interfaces/Imovie-images';
import { TermPipe } from '../../../../../core/pipe/term.pipe';
import { DatePipe, isPlatformBrowser } from '@angular/common';
import { SkeletonMainSliderComponent } from '../../../../../shared/components/ui/skeleton-main-slider/skeleton-main-slider.component';
import { AuthService } from '../../../../../core/services/auth/auth.service';

@Component({
  selector: 'app-slider-movie-details',
  imports: [CarouselModule, TermPipe, DatePipe, SkeletonMainSliderComponent],
  templateUrl: './slider-movie-details.component.html',
  styleUrl: './slider-movie-details.component.css',
})
export class SliderMovieDetailsComponent implements AfterViewChecked {
  private readonly _movieService = inject(MoivesService);
  private readonly _authService = inject(AuthService);
  private readonly _pLATFORM_ID = inject(PLATFORM_ID);
  pathImage: string = this._movieService.PathImageUrl;
  isThisFav: boolean = false;
  @Input({ required: true }) movieDetails!: IMovieDetails;
  @Input({ required: true }) movieVideos!: IMovieVideos;
  @Input({ required: true }) MovieImages!: IMovieImages;

  /**
   * Lifecycle hook that is called after the view has been checked.
   * Invokes the `cheakIfFav` method to determine if the current movie
   * is in the user's favorites, but only if the platform is a browser.
   * Ensures that the favorite status is updated after each check cycle.
   * @returns {void}
   */

  ngAfterViewChecked(): void {
    if (isPlatformBrowser(this._pLATFORM_ID)) {
      this.cheakIfFav();
    }
  }

  /**
   * Check if the current movie is in the user's favorite list.
   * @remark This function is called when the component is initialized and after the view has been checked.
   * @returns {void}
   */
  cheakIfFav() {
    this._authService.favoriteitems$().forEach((item) => {
      if (item.id === this.movieDetails?.id) {
        this.isThisFav = true;
      } else {
        this.isThisFav = false;
      }
    });
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplay: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
    },
    nav: false,
  };

  /**
   * Add the movie to the user's favorite list, if it is already added it will be removed.
   * @remark This function is called when the user clicks on the favorite button.
   */
  addTofav() {
    this._authService.addToFavoritesOrDelete(this.movieDetails);
    this.isThisFav = true;
  }

  deleteFromFav() {
    this._authService.removeFromFavorites(this.movieDetails);
    this.isThisFav = false;
  }
}
