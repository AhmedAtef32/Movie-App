import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { MainSliderComponent } from "./featured/pages/home/components/main-slider/main-slider.component";
import { HomeComponent } from "./featured/pages/home/home.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule, MainSliderComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'movieApp';
}
