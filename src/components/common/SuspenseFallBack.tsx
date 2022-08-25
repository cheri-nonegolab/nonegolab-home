import React from "react";

import { Content } from "src/layouts";
import { Loader } from "src/components/common";

export default function SuspenseFallBack() {
    return (
        <Content>
            <Loader />
        </Content>
    );
}
