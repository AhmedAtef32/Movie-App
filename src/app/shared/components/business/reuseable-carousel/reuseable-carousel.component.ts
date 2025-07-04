import { Component, inject, OnInit } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MoivesService } from '../../../../featured/services/moive/moives.service';
import { ItrendingMovie } from '../../../../featured/interfaces/itrending-movie';
import { MovieCardComponent } from '../../ui/movie-card/movie-card.component';

@Component({
  selector: 'app-reuseable-carousel',
  imports: [CarouselModule, MovieCardComponent],
  templateUrl: './reuseable-carousel.component.html',
  styleUrl: './reuseable-carousel.component.css',
})
export class ReuseableCarouselComponent implements OnInit {
  private readonly _movieService = inject(MoivesService);
  trendingMovieThisWeek!: ItrendingMovie[];
  imagePath: string = this._movieService.PathImageUrl;
  ngOnInit(): void {
    this.getTrendingMoviesThisWeek();
  }

  getTrendingMoviesThisWeek() {
    return this._movieService.getTrendingMoviesThisWeek().subscribe({
      next: (res) => {
        console.log(res.results);
        this.trendingMovieThisWeek = res.results;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    stagePadding: 40,
    margin: 20,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 7,
      },
    },
    nav: false,
  };
}
