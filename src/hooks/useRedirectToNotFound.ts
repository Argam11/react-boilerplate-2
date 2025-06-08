import { useNavigateToNotFoundOnError } from "./useNavigateToNotFoundOnError";
import { useNavigateToNotFoundOnEmptyData } from "./useNavigateToNotFoundOnEmptyData";

export const useRedirectToNotFound = (
  error: unknown,
  data: unknown,
  isLoading: boolean,
) => {
  useNavigateToNotFoundOnError(error);
  useNavigateToNotFoundOnEmptyData(data, isLoading);
};
