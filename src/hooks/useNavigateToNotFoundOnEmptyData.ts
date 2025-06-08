import { useEffect } from "react";
import { useNavigate } from "react-router";

export const useNavigateToNotFoundOnEmptyData = (
  data: unknown,
  isLoading: boolean,
) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !data) {
      navigate("/page-not-found", { replace: true });
    }
  }, [data, isLoading, navigate]);
};
