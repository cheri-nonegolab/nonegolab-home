import React from "react";

interface PropsTypes {
    children: React.ReactNode;
    className?: string;
}

export default function Content({ children, className = "" }: PropsTypes) {
    return (
        <div className={`w-full h-full pt-[15px] ${className}`}>{children}</div>
    );
}
