import React from "react";
import { Content, Wrapper } from "src/layouts";
import BreadCrumb from "src/components/common/BreadCrumb";
import DemoForm from "src/components/demo/DemoForm";

export default function Demo() {
    return (
        <Content>
            <Wrapper>
                <BreadCrumb list={[{ name: "데모신청", url: "/demo" }]} />
                <DemoForm />
            </Wrapper>
        </Content>
    );
}
