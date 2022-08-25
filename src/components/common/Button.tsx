import React from "react";

interface PropsTypes extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    children?: React.ReactNode;
    styleType?: string;
    className?: string;
}

// interface PropsTypes {
//     onClick?: React.MouseEventHandler<HTMLButtonElement>;
//     children?: React.ReactNode;
//     styleType?: string;
//     className?: string;
// }

type RefType = HTMLButtonElement;

const Button = React.forwardRef<RefType, PropsTypes>(
    (
        { onClick, children, styleType, className, ...props }: PropsTypes,
        ref
    ) => {
        switch (styleType) {
            default:
                return (
                    <button
                        onClick={onClick}
                        ref={ref}
                        className={`h-max w-max bg-navy text-white py-[5px] px-[10px] rounded flex items-center transition-all hover:bg-blue ${className}`}
                        {...props}
                    >
                        {children}
                    </button>
                );
        }

        return null;
    }
);

export default Button;
