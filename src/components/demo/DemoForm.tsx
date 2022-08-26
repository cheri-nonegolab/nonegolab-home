import React from "react";
import axios from "axios";
import {
    useForm,
    FieldValues,
    SubmitHandler,
    FieldPath,
} from "react-hook-form";
import {
    SlackSendDemoFormResponseFail,
    SlackSendDemoFormResponseSuccess,
} from "src/types";
import { convertObjToFd } from "src/utils";
import { Button, RHFInput, Text } from "../common";
import { confirmBox } from "src/utils/notify";

interface FormValues {
    name: string;
    email: string;
    phone: string;
}

interface FormListProps {
    label: string;
    name: FieldPath<FormValues>;
    type: string;
    rules: any;
}

const formList: FormListProps[] = [
    {
        label: "이름",
        name: "name",
        type: "text",
        rules: { minLength: 1, maxLength: 20, required: true },
    },
    {
        label: "이메일",
        name: "email",
        type: "email",
        rules: { minLength: 1, maxLength: 20, required: true },
    },
    {
        label: "핸드폰",
        name: "phone",
        type: "phone",
        rules: { minLength: 1, maxLength: 20, required: true },
    },
];

export default function DemoForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = (props: FormValues) => {
        confirmBox("신청하시겠습니까?", () => {
            sendMessage(props);
        });
    };

    const sendMessage = async (data: FormValues) => {
        console.log("전송,data");
        return;

        const request = {
            text: "hi!",
            token: `${process.env.REACT_APP_SLACK_BOT_TOKEN}`,
            channel: `${process.env.REACT_APP_SLACK_CHANEL_ID}`,
        };

        const fd = convertObjToFd(request);
        try {
            const result:
                | SlackSendDemoFormResponseSuccess
                | SlackSendDemoFormResponseFail = await axios.post(
                "https://slack.com/api/chat.postMessage",
                fd,
                {
                    timeout: 3000,
                }
            );

            if (result.ok === true) {
            }
        } catch {}
    };

    return (
        <form
            className="gap-[20px] h-[calc(100%-44px)] mt-[10px] border rounded p-[20px] "
            onSubmit={handleSubmit(onSubmit)}
        >
            <Text type="p" className="text-[13px] mb-[20px]">
                하단의 내용을 기재해 주시면, 전화 또는 이메일로 안내해 드립니다.
            </Text>
            <table className="border border-collapse">
                <tbody>
                    {formList.map((f) => {
                        return (
                            <tr key={`demo-form-${f.name}`}>
                                <td className="p-[10px] border border-gray-dark bg-gray-light">
                                    <Text type="strong">{f.label}</Text>
                                </td>
                                <td className="p-[10px] border border-gray-dark">
                                    <RHFInput<FormValues>
                                        key={`demo-form-${f.name}`}
                                        name={f.name}
                                        register={register}
                                        rules={f.rules}
                                        type={f.type}
                                    />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <Button
                className="border mt-[30px]"
                onClick={handleSubmit(onSubmit)}
            >
                신청
            </Button>
        </form>
    );
}
