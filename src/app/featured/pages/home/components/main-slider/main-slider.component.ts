import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { ItrendingMovie } from '../../../../interfaces/itrending-movie';
import { MoivesService } from '../../../../services/moive/moives.service';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DatePipe } from '@angular/common';
import { TermPipe } from '../../../../../core/pipe/term.pipe';

@Component({
  selector: 'app-main-slider',
  imports: [CarouselModule, DatePipe ,TermPipe],
  templateUrl: './main-slider.component.html',
  styleUrl: './main-slider.component.css'
})
export class MainSliderComponent implements OnInit {

  private readonly _movieService = inject(MoivesService);

  responsiveOptions: any[] | undefined;
  trendingMoive!:ItrendingMovie[]
  pathImage:string = this._movieService.PathImageUrl
  movieNumber:WritableSignal<number> = signal(1)
  counter:WritableSignal<number> = signal(1)

ngOnInit() {
  this.getTrendingMovies()
}



getTrendingMovies(){
   this._movieService.getTrendingMovies().subscribe({
      next : (res)=>{
        console.log(res)
        this.trendingMoive = res.results
        console.log(this.trendingMoive)
        this.movieNumber.set(this.trendingMoive.length)

      },
      error : (err)=>{
        console.log(err)
      }
    });
}

customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    dots: false,
    navSpeed: 700,
    navText: ['<i class="pi pi-angle-left text-black"></i>', '<i class="pi pi-angle-right text-black"></i>'],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: false,

  }

  nextBtn(){
    if(this.counter() == this.movieNumber()){
      this.counter.set(1)
    }else{

      this.counter.update((counter) => counter + 1)
    }
  }

  prevBtn(){
    if(this.counter() == 1){
      this.counter.set(this.movieNumber())
    }else{

      this.counter.update((counter) => counter - 1)
    }

  }



}
