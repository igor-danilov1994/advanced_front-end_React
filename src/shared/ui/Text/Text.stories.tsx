import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { SizeText, Text, ThemeText } from './Text';

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

export const SizeM = Template.bind({});
SizeM.args = {
    text: 'Text text',
    title: 'SizeM title',
    size: SizeText.SizeM,
};

export const SizeL = Template.bind({});
SizeL.args = {
    text: 'Text text',
    title: 'SizeL title',
    size: SizeText.SizeL,
};
