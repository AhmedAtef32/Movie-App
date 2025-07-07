import { Component, inject, Input } from '@angular/core';
import { ICast } from '../../../../featured/interfaces/Icast';
import { MoivesService } from '../../../../featured/services/moive/moives.service';

@Component({
  selector: 'app-cast-card',
  imports: [],
  templateUrl: './cast-card.component.html',
  styleUrl: './cast-card.component.css',
})
export class CastCardComponent {
  private readonly _movieService = inject(MoivesService);
   imagePath:string = this._movieService.PathImageUrl;
  @Input({ required: true }) cast!: ICast;
}
