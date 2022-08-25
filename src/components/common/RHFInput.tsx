import React from "react";
import { UseFormRegister, FieldPath, RegisterOptions } from "react-hook-form";

export interface PropsTypes<FormValues>
    extends React.InputHTMLAttributes<HTMLInputElement> {
    register: UseFormRegister<FormValues>;
    rules?: RegisterOptions;
    name: FieldPath<FormValues>;
    type?: string;
    styleType?: string;
    className?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export default function RHFInput<FormValues>({
    register,
    rules: _rules = {},
    name,
    type = "text",
    onChange,
    styleType,
    className,
    ...props
}: PropsTypes<FormValues>) {
    let rules = {
        ..._rules,
        onChange,
    };

    switch (type) {
        case "text":
            rules = { ...rules };
            break;
        case "number":
            rules = { ...rules, pattern: /^(0|[1-9]\d*)(\.\d+)?$/ };
            break;
        case "phone":
            rules = {
                ...rules,
                pattern:
                    /(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3,4}( |-|\.)?\d{4})/i,
            };
            break;
        case "email":
            rules = {
                ...rules,
                pattern: /^\S+@\S+$/i,
            };
            break;
        case "date":
            rules = {
                ...rules,
                pattern: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
            };
            break;
        default:
            rules = { ...rules };
    }

    switch (styleType) {
        default:
            return (
                <input
                    {...register(name, rules)}
                    className={`border-b w-[full] ${className}`}
                    onChange={onChange}
                    {...props}
                />
            );
    }

    return null;
}
