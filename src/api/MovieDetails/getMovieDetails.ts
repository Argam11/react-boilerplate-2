import { request } from "../request";
import type {
  QueryArgs,
  MovieDetailsApi,
  MovieCreditsApi,
  MovieTrailersApi,
} from "../types";

export const getMovieDetails = ({ path, options }: QueryArgs) =>
  request<MovieDetailsApi>(
    {
      path,
    },
    {
      ...options,
      method: "GET",
    },
  );

export const getMovieCredits = ({ path, options }: QueryArgs) =>
  request<MovieCreditsApi>(
    {
      path,
    },
    {
      ...options,
      method: "GET",
    },
  );

export const getMovieTrailers = ({ path, options }: QueryArgs) =>
  request<MovieTrailersApi>(
    {
      path,
    },
    {
      ...options,
      method: "GET",
    },
  );
