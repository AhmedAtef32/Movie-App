export interface IResMovie {
  page: number
  results: IMovie[]
  total_pages: number
  total_results: number
}

export interface IMovie {
  adult: boolean
  backdrop_path: string
  id: number
  title: string
  original_title: string
  overview: string
  poster_path: string
  media_type: string
  original_language: string
  genre_ids: number[]
  popularity: number
  release_date: string
  video: boolean
  vote_average: number
  vote_count: number
}
