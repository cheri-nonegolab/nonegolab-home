import React from "react";

interface PropsTypes {
    children?: React.ReactNode;
    styleType?: string;
    className?: string;
}

export default function Text({ children, styleType, className }: PropsTypes) {
    switch (styleType) {
        case "danger":
            return (
                <div className={`text-[20px] text-danger ${className}`}>
                    {children}
                </div>
            );
        case "section":
            return <div className={`text-[50px] ${className}`}>{children}</div>;
        default:
            return <div className={`text-[20px] ${className}`}>{children}</div>;
    }

    return null;
}
