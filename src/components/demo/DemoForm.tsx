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
import { Button } from "../common";
import RHFInput from "../common/RHFInput";

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

    console.log(errors);

    const onSubmit: SubmitHandler<FieldValues> = (props) => {
        console.log(props);
        sendMessage();
    };

    const sendMessage = async () => {
        console.log("전송");
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
            className="flex flex-col gap-[20px] items-center justify-center h-[calc(100%-24px)]"
            onSubmit={handleSubmit(onSubmit)}
        >
            {formList.map((f) => {
                const errorMessage =
                    errors[f.name]?.type === "required"
                        ? "값을 입력해주세요"
                        : errors[f.name]?.message;

                return (
                    <div
                        key={`demo-form-${f.name}`}
                        className="grid grid-cols-[150px_1fr] items-center"
                    >
                        <strong>{f.label}</strong>
                        <RHFInput<FormValues>
                            key={`demo-form-${f.name}`}
                            name={f.name}
                            register={register}
                            rules={f.rules}
                            type={f.type}
                        />
                    </div>
                );
            })}
            <Button
                className="border mt-[30px]"
                onClick={handleSubmit(onSubmit)}
            >
                slack 메세지 연결
            </Button>
        </form>
    );
}
