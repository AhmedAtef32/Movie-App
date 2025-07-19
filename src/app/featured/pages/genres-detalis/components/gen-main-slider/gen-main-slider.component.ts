import { Component, inject, Input } from '@angular/core';
import { MainSliderInEveryPageComponent } from "../../../../../shared/components/business/main-slider-in-every-page/main-slider-in-every-page.component";
import { SkeletonMainSliderComponent } from "../../../../../shared/components/ui/skeleton-main-slider/skeleton-main-slider.component";
import { IMovie } from '../../../../../shared/interfaces/movie';
import { MoivesService } from '../../../../services/moive/moives.service';

@Component({
  selector: 'app-gen-main-slider',
  imports: [MainSliderInEveryPageComponent, SkeletonMainSliderComponent],
  templateUrl: './gen-main-slider.component.html',
  styleUrl: './gen-main-slider.component.css'
})
export class GenMainSliderComponent {
  private readonly _moivesService = inject(MoivesService)
  @Input({required:true}) id!:number
  @Input({required:true}) movieOrSeries!:IMovie[] |undefined
  pathImage:string = this._moivesService.PathImageUrl


}
