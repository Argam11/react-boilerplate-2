import { useState } from "react";

export const useErrorHandler = () => {
  const [error, setError] = useState<Error | null>(null);

  const handleError = (err: Error) => {
    setError(err);
  };

  return { error, handleError };
};
