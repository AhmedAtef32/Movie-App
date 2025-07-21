import {
  Component,
  ElementRef,
  HostListener,
  inject,
  OnInit,
  PLATFORM_ID,
  ViewChild,
  WritableSignal,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { AuthService } from '../../services/auth/auth.service';
import { isPlatformBrowser } from '@angular/common';
import { IMovie } from '../../../shared/interfaces/movie';
import { IMovieDetails } from '../../../featured/interfaces/imovie-details';
@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, RouterLinkActive, DrawerModule, ButtonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent implements OnInit {
   readonly _authService = inject(AuthService);
  private readonly _pLATFORM_ID = inject(PLATFORM_ID);

  @ViewChild('navbar') navbar!: ElementRef<HTMLElement>;
  visible1: boolean = false;
  favoriteItems: IMovieDetails[] = [];

  ngOnInit(): void {
    if (isPlatformBrowser(this._pLATFORM_ID)) {

      if(localStorage.getItem('favoriteItems')) {
        this.favoriteItems = JSON.parse(localStorage.getItem('favoriteItems')!);
        this._authService.favoriteitems$.set(this.favoriteItems)
      }

    }
  }

  /**
   * Retrieves a request token from the authentication service.
   * Subscribes to the response and sets the received request token.
   * If the token is not valid yet, opens a new window for user authentication
   * with the Movie DB, and updates the validity status.
   */



  @HostListener('window:scroll')
  /**
   * Adjusts the background color of the navigation bar based on the window scroll position.
   * If the scroll position is greater than 50, a semi-transparent background is added.
   * Otherwise, the background is removed.
   */
  onWindowScroll() {
    let nav = this.navbar.nativeElement;
    let scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
      nav.classList.add('bg-[rgba(12,19,33,0.9)]!');
    } else {
      nav.classList.remove('bg-[rgba(12,19,33,0.9)]!');
    }
  }
}
