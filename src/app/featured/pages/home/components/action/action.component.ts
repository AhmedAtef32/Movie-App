import { Component, inject, OnInit } from '@angular/core';
import { SkeletonAllSlidersComponent } from "../../../../../shared/components/ui/skeleton-all-sliders/skeleton-all-sliders.component";
import { ReuseableCarouselComponent } from "../../../../../shared/components/business/reuseable-carousel/reuseable-carousel.component";
import { ItrendingMovie } from '../../../../interfaces/itrending-movie';
import { MoivesService } from '../../../../services/moive/moives.service';

@Component({
  selector: 'app-action',
  imports: [SkeletonAllSlidersComponent, ReuseableCarouselComponent],
  templateUrl: './action.component.html',
  styleUrl: './action.component.css'
})
export class ActionComponent implements OnInit {
  private readonly _moivesService = inject(MoivesService)

  actionMovies!:ItrendingMovie[]
  imagePath:string = this._moivesService.PathImageUrlWithLowQuality

  ngOnInit(): void {

    this._moivesService.getActionMovie().subscribe({
      next: (res) => {
        this.actionMovies = res.results
      }
    })

  }

}
