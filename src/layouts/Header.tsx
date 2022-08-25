import React from "react";
import {
    NavigateFunction,
    useLocation,
    Location,
    useNavigate,
} from "react-router-dom";

const MENU_LIST = [
    { name: "회사소개", url: "/intro", styleType: "link" },
    { name: "제품소개", url: "/product", styleType: "link" },
    { name: "CONTACT US", url: "/contact", styleType: "link" },
    { name: "데모신청", url: "/demo", styleType: "link" },
];

export default function Header(): JSX.Element {
    const navigate: NavigateFunction = useNavigate();
    const { pathname }: Location = useLocation();

    function goHome(): void {
        navigate("/");
    }

    return (
        <div className="min-h-[70px] max-h-[70px] w-full flex justify-center shadow shadow-bottom">
            <div className="flex justify-between items-center min-w-[1000px] max-w-[1000px] ">
                <div
                    className="cursor-pointer h-full flex items-center"
                    onClick={goHome}
                >
                    <a
                        className="text-[20px] font-bold text-navy"
                        type="button"
                    >
                        NonegoLab
                    </a>
                </div>

                <ol className="flex items-center text-[15px] gap-[20px] h-full">
                    {MENU_LIST.map((m) => {
                        const currentPageClassName =
                            pathname === m.url ? "border-navy" : "";

                        return (
                            <li
                                key={`menu-${m.name}`}
                                className={`${currentPageClassName} cursor-pointer px-[10px] h-full flex items-center border-b-[3px] border-transparent hover:border-navy transition-all `}
                                onClick={() => navigate(m.url)}
                            >
                                <a>{m.name}</a>
                            </li>
                        );
                    })}
                </ol>
            </div>
        </div>
    );
}
