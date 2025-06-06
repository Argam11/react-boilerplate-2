export interface QueryArgs {
  searchParams?: URLSearchParams;
  options?: RequestInit;
}

export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
}

export interface MoviesApi {
  results: Movie[];
  page: number;
  total_results: number;
  total_pages: number;
}
