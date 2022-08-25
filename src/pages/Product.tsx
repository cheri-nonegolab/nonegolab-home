import React from "react";
import { BreadCrumb } from "src/components/common";
import { Content, Wrapper } from "src/layouts";

export default function Product() {
    return (
        <Content>
            <Wrapper>
                <BreadCrumb list={[{ name: "제품소개", url: "/product" }]} />
                <h1 className="text-[50px]">Product</h1>
            </Wrapper>
        </Content>
    );
}
