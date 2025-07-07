import { Component, Input } from '@angular/core';
import { ICast } from '../../../../interfaces/Icast';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CastCardComponent } from "../../../../../shared/components/ui/cast-card/cast-card.component";

@Component({
  selector: 'app-movie-cast',
  imports: [CarouselModule, CastCardComponent],
  templateUrl: './movie-cast.component.html',
  styleUrl: './movie-cast.component.css'
})
export class MovieCastComponent {

  @Input({required: true}) MovieCast!: ICast[]

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
        items: 3,
      },
      740: {
        items: 5,
      },
      940: {
        items: 7,
      },
    },
    nav: false,
  }


}
