import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Text, ThemeText } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        square: true,
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    text: 'Text',
    title: 'Some tittle',
};

export const Error = Template.bind({});
Error.args = {
    text: 'Text',
    title: 'Some tittle',
    theme: ThemeText.ERROR,
};
