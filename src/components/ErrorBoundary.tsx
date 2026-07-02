import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

/** Keeps the page visible if a child component throws at runtime. */
export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Portfolio render error:", error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-fallback">
          <h1>Something went wrong loading this page.</h1>
          <p>Try a hard refresh (Ctrl+Shift+R). If it persists, check the browser console.</p>
        </div>
      );
    }

    return this.props.children;
  }
}
