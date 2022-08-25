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
    styleType: "",
    className: "",
};

export const Danger = Template.bind({});
Danger.args = {
    children: "It's danger!",
    styleType: "danger",
    className: "",
};

export const Section = Template.bind({});
Section.args = {
    children: "It's section!",
    styleType: "section",
    className: "",
};
