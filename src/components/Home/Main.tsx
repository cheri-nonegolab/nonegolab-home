import React from "react";
import { useNavigate } from "react-router-dom";
import { Wrapper } from "src/layouts";
import { Button, Text } from "../common";

export default function Main() {
    const navigate = useNavigate();

    function goDemo() {
        navigate("/demo");
    }
    return (
        <section className="h-[calc(100%+15px)] w-[100vw] bg-gray -mt-[15px]">
            <Wrapper className="flex justify-between items-center">
                <div className="w-[400px] h-[400px] rounded-full bg-white flex items-center justify-center shadow-bottom">
                    <Text type="h3">NonegoLab</Text>
                </div>
                <div className="w-[400px] h-[400px] rounded flex flex-col justify-center">
                    <Text type="strong" className="text-[20px]">
                        네트워크 가시화 서비스
                    </Text>
                    <Text type="p" className="text-[13px] mt-[10px]">
                        네트워크를 가시화하여 보안취약점을 파악할 수 있습니다.
                    </Text>
                    <div className="flex justify-end mt-[50px]">
                        <Button
                            onClick={goDemo}
                            className="px-[20px] py-[10px]"
                        >
                            데모신청
                        </Button>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
}
