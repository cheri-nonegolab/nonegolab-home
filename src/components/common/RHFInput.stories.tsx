import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useForm } from "react-hook-form";

import RHFInput from "./RHFInput";

export default {
    title: "RHFInput",
    component: RHFInput,
} as ComponentMeta<typeof RHFInput>;

interface FormValues {
    apple: string;
}

const Template: ComponentStory<typeof RHFInput> = (args) => {
    const { register } = useForm<FormValues>();
    return <RHFInput<FormValues> {...args} register={register} name="apple" />;
};

export const Default = Template.bind({});

Default.args = {
    styleType: "",
    className: "",
    type: "number",
    onChange: () => {
        console.log("Hello!");
    },
    rules: {
        maxLength: 10,
        minLength: 10,
    },
};
