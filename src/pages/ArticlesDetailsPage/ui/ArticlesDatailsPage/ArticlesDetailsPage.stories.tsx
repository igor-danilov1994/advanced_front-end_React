import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ArticlesDetailsPage from './ArticlesDetailsPage';

export default {
    title: 'shared/ArticlesDetailsPage',
    component: ArticlesDetailsPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {},
} as ComponentMeta<typeof ArticlesDetailsPage>;

const Template: ComponentStory<typeof ArticlesDetailsPage> = (args) => <ArticlesDetailsPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};
