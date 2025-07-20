import { Component, inject } from '@angular/core';
import { SearchService } from '../../services/search/search.service';
import {FormsModule} from '@angular/forms'
import { IMovie } from '../../../shared/interfaces/movie';
import { MoivesService } from '../../services/moive/moives.service';
import { SearchCardComponent } from "../../../shared/components/ui/search-card/search-card.component";
@Component({
  selector: 'app-search',
  imports: [FormsModule, SearchCardComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  private readonly _searchService = inject(SearchService)
  private readonly _moivesService = inject(MoivesService)
  searchWord:string = ''
  moviesAndSeries!:IMovie[]
  imagePath:string = this._moivesService.PathImageUrlWithLowQuality

  searchWithWord(){
    this._searchService.getMoviesOrSeriesWithSearch(this.searchWord).subscribe({
      next: (res) => {
        this.moviesAndSeries= res.results
        console.log(this.moviesAndSeries)
      },
    })
  }


}
