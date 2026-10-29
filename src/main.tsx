import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { EJScreenCaseStudy } from "./pages/EJScreenCaseStudy";
import "./index.css";

function pathOf(pathname: string) {
  return pathname.replace(/\/+$/, "") || "/";
}

function Router() {
  const [path, setPath] = useState(() => pathOf(window.location.pathname));

  useEffect(() => {
    const onNav = () => setPath(pathOf(window.location.pathname));
    window.addEventListener("popstate", onNav);
    return () => window.removeEventListener("popstate", onNav);
  }, []);

  if (path === "/ejscreen") {
    return <EJScreenCaseStudy />;
  }

  return <App />;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary>
      <Router />
    </ErrorBoundary>
  </StrictMode>
);
