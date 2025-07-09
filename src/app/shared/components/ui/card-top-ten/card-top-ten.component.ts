import { Component, input, InputSignal } from '@angular/core';
import { IMovie } from '../../../interfaces/movie';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-top-ten',
  imports: [RouterLink],
  templateUrl: './card-top-ten.component.html',
  styleUrl: './card-top-ten.component.css'
})
export class CardTopTenComponent {


  index: InputSignal<number> = input.required( )  ;
  movie:InputSignal<IMovie> = input.required( ) ;
  imagePath:InputSignal<string> = input.required( ) ;

}
