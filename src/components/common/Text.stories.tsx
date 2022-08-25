import { ComponentMeta, ComponentStory } from "@storybook/react";

import Text from "./Text";

export default {
    title: "Text",
    component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Default = Template.bind({});

Default.args = {
    children: "It's default!",
    type: "",
    className: "",
};

export const P = Template.bind({});
P.args = {
    children: "It's p tag!",
    type: "p",
    className: "",
};

export const H3 = Template.bind({});
H3.args = {
    children: "It's h3 tag!",
    type: "h3",
    className: "",
};
