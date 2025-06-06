import { API_KEY, baseUrl } from "./constants";

interface IRequestParams {
  path: string;
  searchParams?: URLSearchParams;
}

const responseMock = [
  {
    id: 1,
    title: "Movie Title",
    overview: "This is a movie overview.",
    release_date: "2023-01-01",
    poster_path: "/path/to/poster.jpg",
    backdrop_path: "/path/to/backdrop.jpg",
    vote_average: 8.5,
    vote_count: 1000,
    popularity: 10.0,
  },
  {
    id: 2,
    title: "Movie Title",
    overview: "This is a movie overview.",
    release_date: "2023-01-01",
    poster_path: "/path/to/poster.jpg",
    backdrop_path: "/path/to/backdrop.jpg",
    vote_average: 8.5,
    vote_count: 1000,
    popularity: 10.0,
  },
  {
    id: 3,
    title: "Movie Title",
    overview: "This is a movie overview.",
    release_date: "2023-01-01",
    poster_path: "/path/to/poster.jpg",
    backdrop_path: "/path/to/backdrop.jpg",
    vote_average: 8.5,
    vote_count: 1000,
    popularity: 10.0,
  },
  {
    id: 4,
    title: "Movie Title",
    overview: "This is a movie overview.",
    release_date: "2023-01-01",
    poster_path: "/path/to/poster.jpg",
    backdrop_path: "/path/to/backdrop.jpg",
    vote_average: 8.5,
    vote_count: 1000,
    popularity: 10.0,
  },
  {
    id: 5,
    title: "Movie Title",
    overview: "This is a movie overview.",
    release_date: "2023-01-01",
    poster_path: "/path/to/poster.jpg",
    backdrop_path: "/path/to/backdrop.jpg",
    vote_average: 8.5,
    vote_count: 1000,
    popularity: 10.0,
  },
  {
    id: 6,
    title: "Movie Title",
    overview: "This is a movie overview.",
    release_date: "2023-01-01",
    poster_path: "/path/to/poster.jpg",
    backdrop_path: "/path/to/backdrop.jpg",
    vote_average: 8.5,
    vote_count: 1000,
    popularity: 10.0,
  },
  {
    id: 7,
    title: "Movie Title",
    overview: "This is a movie overview.",
    release_date: "2023-01-01",
    poster_path: "/path/to/poster.jpg",
    backdrop_path: "/path/to/backdrop.jpg",
    vote_average: 8.5,
    vote_count: 1000,
    popularity: 10.0,
  },
  {
    id: 8,
    title: "Movie Title",
    overview: "This is a movie overview.",
    release_date: "2023-01-01",
    poster_path: "/path/to/poster.jpg",
    backdrop_path: "/path/to/backdrop.jpg",
    vote_average: 8.5,
    vote_count: 1000,
    popularity: 10.0,
  },
  {
    id: 9,
    title: "Movie Title",
    overview: "This is a movie overview.",
    release_date: "2023-01-01",
    poster_path: "/path/to/poster.jpg",
    backdrop_path: "/path/to/backdrop.jpg",
    vote_average: 8.5,
    vote_count: 1000,
    popularity: 10.0,
  },
  {
    id: 10,
    title: "Movie Title",
    overview: "This is a movie overview.",
    release_date: "2023-01-01",
    poster_path: "/path/to/poster.jpg",
    backdrop_path: "/path/to/backdrop.jpg",
    vote_average: 8.5,
    vote_count: 1000,
    popularity: 10.0,
  },
  {
    id: 11,
    title: "Movie Title",
    overview: "This is a movie overview.",
    release_date: "2023-01-01",
    poster_path: "/path/to/poster.jpg",
    backdrop_path: "/path/to/backdrop.jpg",
    vote_average: 8.5,
    vote_count: 1000,
    popularity: 10.0,
  },
  {
    id: 12,
    title: "Movie Title",
    overview: "This is a movie overview.",
    release_date: "2023-01-01",
    poster_path: "/path/to/poster.jpg",
    backdrop_path: "/path/to/backdrop.jpg",
    vote_average: 8.5,
    vote_count: 1000,
    popularity: 10.0,
  },
  // {
  //   id: 13,
  //   title: "Movie Title",
  //   overview: "This is a movie overview.",
  //   release_date: "2023-01-01",
  //   poster_path: "/path/to/poster.jpg",
  //   backdrop_path: "/path/to/backdrop.jpg",
  //   vote_average: 8.5,
  //   vote_count: 1000,
  //   popularity: 10.0,
  // },
  // {
  //   id: 14,
  //   title: "Movie Title",
  //   overview: "This is a movie overview.",
  //   release_date: "2023-01-01",
  //   poster_path: "/path/to/poster.jpg",
  //   backdrop_path: "/path/to/backdrop.jpg",
  //   vote_average: 8.5,
  //   vote_count: 1000,
  //   popularity: 10.0,
  // },
  // {
  //   id: 15,
  //   title: "Movie Title",
  //   overview: "This is a movie overview.",
  //   release_date: "2023-01-01",
  //   poster_path: "/path/to/poster.jpg",
  //   backdrop_path: "/path/to/backdrop.jpg",
  //   vote_average: 8.5,
  //   vote_count: 1000,
  //   popularity: 10.0,
  // },
];

export async function request<TData>(
  { path, searchParams }: IRequestParams,
  options?: RequestInit,
): Promise<TData | null> {
  const url = new URL(path, baseUrl);

  searchParams?.set("api_key", API_KEY);

  const searchParamsDefault = new URLSearchParams({
    api_key: import.meta.env.VITE_MOVIE_API_KEY,
  });

  if (searchParams) {
    for (const [key, value] of searchParams.entries()) {
      searchParamsDefault.set(key, value);
    }
  }

  url.search = searchParamsDefault.toString();

  // const response = await fetch(url, {
  //   ...options,
  // });

  // if (!response.ok) {
  //   const errorMessage = `Error ${response.status}: ${response.statusText}`;
  //   const errorResponse = await response.json();

  //   throw new Error(errorMessage, {
  //     cause: { ...errorResponse, status: response.status },
  //   });
  // }

  // if (response.status === 204) {
  //   return null;
  // }

  // return response.json();

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        results: responseMock,
        page: Number(searchParams?.get("page")) + 1,
        total_pages: 5,
        total_results: 1015164,
      } as TData);
    }, 1000);
  });
}
