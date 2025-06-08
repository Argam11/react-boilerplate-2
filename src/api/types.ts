export interface QueryArgs {
  path: string;
  searchParams?: URLSearchParams;
  options?: RequestInit;
}

export interface GenresApi {
  genres: { id: number; name: string }[];
}

export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  release_date: string;
  vote_average: number;
}

export interface MoviesApi {
  results: Movie[];
  page: number;
  total_results: number;
  total_pages: number;
}

export interface MovieDetailsApi {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  release_date: string;
  runtime: number;
  vote_average: number;
  genres: { id: number; name: string }[];
}

export interface Cast {
  id: number;
  name: string;
  profile_path: string | null;
}
export interface MovieCreditsApi {
  id: number;
  cast: Cast[];
}
export interface MovieTrailersApi {
  id: number;
  results: {
    key: string;
    name: string;
    site: string;
    type: string;
  }[];
}
