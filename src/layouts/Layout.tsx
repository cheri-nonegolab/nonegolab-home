import React from "react";
import { Header } from "src/layouts";

interface PropsType {
    children: React.ReactNode;
}

export default function Layout({ children }: PropsType): JSX.Element {
    return (
        <div className="h-[100vh] w-[100vw] flex flex-col items-center">
            <Header />
            {children}
        </div>
    );
}
