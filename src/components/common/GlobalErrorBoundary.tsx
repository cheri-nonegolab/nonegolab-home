import React from "react";

import { ErrorFallBack } from "src/components/common";

interface Props {
    children?: React.ReactNode;
}

interface State {
    hasError: boolean;
    error: Error;
    errorInfo: React.ErrorInfo;
    reset: () => void;
}

class ErrorBoundary extends React.Component<Props, State> {
    state: State = {
        hasError: false,
        error: { name: "", message: "", stack: undefined },
        errorInfo: { componentStack: "" },
        reset: () => {},
    };

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        this.setState({ hasError: true, error, errorInfo });
    }

    render() {
        if (this.state.hasError) {
            return (
                <ErrorFallBack
                    error={this.state.error}
                    errorInfo={this.state.errorInfo}
                    reset={this.state.reset.bind(this)}
                />
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
