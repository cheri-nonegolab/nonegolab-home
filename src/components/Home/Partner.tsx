import React from "react";
import { Wrapper } from "src/layouts";
import { Text } from "../common";

export default function Partner() {
    return (
        <section className="h-[calc(50%)] w-[100vw] bg-white py-[30px]">
            <Wrapper>
                <Text type="h3" className="mb-[30px]">
                    Partner
                </Text>
                <div className="h-[calc(100%-90px)] bg-gray"></div>
            </Wrapper>
        </section>
    );
}
