import React from "react";
import { AiFillHome } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate, NavigateFunction } from "react-router-dom";

interface ListItemsTypes {
    name: string;
    url: string;
}

interface PropsTypes {
    className?: string;
    list: ListItemsTypes[];
}

export default function BreadCrumb({ className, list = [] }: PropsTypes) {
    const navigate: NavigateFunction = useNavigate();

    const makeCrumb = (list: ListItemsTypes[]) => {
        return (
            <React.Fragment>
                {list.map((x) => (
                    <React.Fragment key={`bread-crumb-${x.name}`}>
                        <MdKeyboardArrowRight />
                        <span
                            onClick={() => navigate(x.url)}
                            className="hover:text-blue cursor-pointer"
                        >
                            {x.name}
                        </span>
                    </React.Fragment>
                ))}
            </React.Fragment>
        );
    };

    return (
        <div className="flex items-center">
            <AiFillHome
                className="hover:fill-blue cursor-pointer transition-all"
                onClick={() => navigate("/")}
            />
            {makeCrumb(list)}
        </div>
    );
}
