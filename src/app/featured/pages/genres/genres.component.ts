import { Component, inject, OnInit } from '@angular/core';
import { GenresService } from '../../services/genres/genres.service';
import { Igeres } from '../../interfaces/genres';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-genres',
  imports: [RouterLink],
  templateUrl: './genres.component.html',
  styleUrl: './genres.component.css'
})
export class GenresComponent implements OnInit {

  private readonly _genresService = inject(GenresService)

  geners!:Igeres[]
  search: string = 'movie'
  ngOnInit(): void {
      this.getGenres()
  }
  getGenres(){
    this._genresService.getGenres().subscribe({
      next: (res) => {
        this.geners = res.genres
      },
    });
  }

    changeSearch(event: Event) {
    let ele = event.target as HTMLSelectElement;
    this.search = ele.value;
    console.log(this.search);
  }
}
