import { ApplicationErrorBoundary } from "@components/ApplicationErrorBoundary/ApplicationErrorBoundary";
import "./App.css";

function ProblematicComponent() {
  throw new Error("I am broken!");
  return <div>Problematic component</div>;
}

function App() {
  return (
    <div>
      <ApplicationErrorBoundary>
        <ProblematicComponent />
      </ApplicationErrorBoundary>
    </div>
  );
}

export default App;
