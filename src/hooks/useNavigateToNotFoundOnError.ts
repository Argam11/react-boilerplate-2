import { useEffect } from "react";
import { useNavigate } from "react-router";

export const useNavigateToNotFoundOnError = (error?: unknown) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      navigate("/page-not-found", { replace: true });
    }
  }, [error, navigate]);
};
