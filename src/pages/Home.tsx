import React from "react";
import { Main, Partner } from "src/components/Home";
import { Content } from "src/layouts";

export default function Home(): JSX.Element {
    return (
        <Content>
            <Main />
            <Partner />
        </Content>
    );
}
