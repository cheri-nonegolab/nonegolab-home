import React from "react";
import { BreadCrumb } from "src/components/common";
import { Content, Wrapper } from "src/layouts";

export default function Contact() {
    return (
        <Content>
            <Wrapper>
                <BreadCrumb list={[{ name: "CONTACT US", url: "/contact" }]} />
                <h1 className="text-[50px]">Contact</h1>
            </Wrapper>
        </Content>
    );
}
