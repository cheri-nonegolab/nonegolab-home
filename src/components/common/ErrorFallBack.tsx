import React from "react";

//components
import { Button, Text } from "src/components/common";
import { Wrapper } from "src/layouts";

interface PropsTypes {
    error: Error;
    errorInfo: React.ErrorInfo;
    reset: () => void;
}

export default function ErrorFallBack({ error, errorInfo, reset }: PropsTypes) {
    return (
        <Wrapper>
            <Text styleType="danger">에러가 발생했습니다.</Text>
            <p className="text-[20px]">message : {error.message}</p>
            <p className="text-[20px]">name : {error.name}</p>
            {/* <p className="text-[20px]">code : {error.code}</p> */}
            <div className="border border-black py-[10px] px-[20px] rounded mt-[10px]">
                <details>{errorInfo.componentStack}</details>
            </div>
            <Button onClick={reset}>돌아가기</Button>
        </Wrapper>
    );
}
