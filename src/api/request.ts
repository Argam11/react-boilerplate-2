import { API_KEY, baseUrl } from "./constants";

interface IRequestParams {
  path: string;
  searchParams?: URLSearchParams;
}

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

  const response = await fetch(url, {
    ...options,
  });

  if (!response.ok) {
    const errorMessage = `Error ${response.status}: ${response.statusText}`;
    const errorResponse = await response.json();

    throw new Error(errorMessage, {
      cause: { ...errorResponse, status: response.status },
    });
  }

  if (response.status === 204) {
    return null;
  }

  return response.json();
}
