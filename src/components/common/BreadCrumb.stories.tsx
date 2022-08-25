import { BrowserRouter } from "react-router-dom";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import BreadCrumb from "./BreadCrumb";

export default {
    title: "BreadCrumb",
    component: BreadCrumb,
} as ComponentMeta<typeof BreadCrumb>;

const Template: ComponentStory<typeof BreadCrumb> = (args) => (
    <BrowserRouter>
        <BreadCrumb {...args} />
    </BrowserRouter>
);

export const Default = Template.bind({});

Default.args = {
    list: [],
    className: "",
};

export const Example = Template.bind({});

Example.args = {
    list: [{ name: "example", url: "/" }],
    className: "",
};
