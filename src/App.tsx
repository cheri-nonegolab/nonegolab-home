import React from "react";

import { GlobalErrorBoundary, SuspenseFallBack } from "./components/common";
import GlobalRouter from "./GlobalRouter";

function App() {
    return (
        <React.Suspense fallback={<SuspenseFallBack />}>
            <GlobalErrorBoundary>
                <GlobalRouter />
            </GlobalErrorBoundary>
        </React.Suspense>
    );
}

export default App;
