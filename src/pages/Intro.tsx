import React from "react";
import { BreadCrumb } from "src/components/common";
import { Content, Wrapper } from "src/layouts";

export default function Intro() {
    return (
        <Content>
            <Wrapper>
                <BreadCrumb list={[{ name: "íėŽėę°", url: "/intro" }]} />
                <h1 className="text-[50px]">NonegoLab</h1>
            </Wrapper>
        </Content>
    );
}
