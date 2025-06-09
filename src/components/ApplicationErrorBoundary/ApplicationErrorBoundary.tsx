import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./ErrorFallback";
import { ApplicationErrorBoundaryProps } from "./types";

export const ApplicationErrorBoundary = ({
  children,
}: ApplicationErrorBoundaryProps) => (
  <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
);
