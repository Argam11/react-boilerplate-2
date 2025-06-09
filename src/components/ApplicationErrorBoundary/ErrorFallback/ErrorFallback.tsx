import "./style.css";

export const ErrorFallback = () => (
  <div className="error-container" role="alert">
    <p className="error-message">Oops! Something didn't go as expected.</p>
    <button className="reload-button" onClick={() => window.location.reload()}>
      Reload Page
    </button>
  </div>
);
