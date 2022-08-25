import React from "react";

interface PropsTypes {
    children?: React.ReactNode;
    type?: string;
    className?: string;
}

export default function Text({ children, type, className }: PropsTypes) {
    switch (type) {
        case "p":
            return <p className={`text-[20px] ${className}`}>{children}</p>;
        case "strong":
            return (
                <strong className={`text-[20px] font-bold ${className}`}>
                    {children}
                </strong>
            );
        case "h1":
            return <h1 className={`text-[50px] ${className}`}>{children}</h1>;
        case "h2":
            return <h2 className={`text-[40px] ${className}`}>{children}</h2>;
        case "h3":
            return <h3 className={`text-[30px] ${className}`}>{children}</h3>;
        default:
            return (
                <span className={`text-[15px] ${className}`}>{children}</span>
            );
    }

    return null;
}
