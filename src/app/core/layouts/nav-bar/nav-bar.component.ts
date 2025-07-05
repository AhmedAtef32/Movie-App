import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, RouterLinkActive , DrawerModule, ButtonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  @ViewChild('navbar') navbar!: ElementRef<HTMLElement>;
  visible1: boolean = false;



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
