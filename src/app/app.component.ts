import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { MainSliderComponent } from './featured/pages/home/components/main-slider/main-slider.component';
import { HomeComponent } from './featured/pages/home/home.component';
import { NavBarComponent } from './core/layouts/nav-bar/nav-bar.component';
import { FooterComponent } from './core/layouts/footer/footer.component';
import { ScrollTop } from 'primeng/scrolltop';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ButtonModule,
    MainSliderComponent,
    HomeComponent,
    NavBarComponent,
    FooterComponent,
    ScrollTop,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'movieApp';
}
