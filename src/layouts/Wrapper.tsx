import React from "react";

interface PropsTypes {
    children: React.ReactNode;
    className?: string;
}

export default function Wrapper({ children, className = "" }: PropsTypes) {
    return (
        <div
            className={`h-full max-w-[1000px] w-full relative m-auto relative ${className}`}
        >
            {children}
        </div>
    );
}
