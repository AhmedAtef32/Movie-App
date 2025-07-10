import { Component, input, Input, InputSignal } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CardTopTenComponent } from "../../ui/card-top-ten/card-top-ten.component";
import { IMovie } from '../../../interfaces/movie';
@Component({
  selector: 'app-top-ten-slider',
  imports: [CarouselModule, CardTopTenComponent],
  templateUrl: './top-ten-slider.component.html',
  styleUrl: './top-ten-slider.component.css'
})
export class TopTenSliderComponent {

  MoviesOrSeries:InputSignal<IMovie[]> = input.required()
  topTenWord:InputSignal<string> = input.required()
  @Input({ required: true }) imagePath!: string

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    stagePadding: 40,
    lazyLoad: true,
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
        items: 4,
      },
      940: {
        items: 6,
      },
    },
    nav: false,
  };
}
