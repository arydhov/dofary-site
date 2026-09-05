import React from "react";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Dofary UI error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="min-h-screen flex items-center justify-center px-6">
          <section className="max-w-md text-center">
            <h1 className="text-2xl font-semibold">Something went wrong.</h1>
            <p className="mt-3 text-sm opacity-70">
              Refresh the page and try again.
            </p>
          </section>
        </main>
      );
    }

    return this.props.children;
  }
}
