import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Country, Currency } from 'shared/const/common';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
    <ProfileCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    profile: {
        username: 'username',
        first: 'first',
        lastname: 'lastname',
        age: 12,
        country: Country.USA,
        city: 'city',
        currency: Currency.USD,
    },
};

export const isLoading = Template.bind({});
isLoading.args = {
    profile: {
        username: 'username',
        first: 'first',
        lastname: 'lastname',
        age: 12,
        country: Country.USA,
        city: 'city',
        currency: Currency.USD,
    },
    isLoading: true,
};
export const withError = Template.bind({});
withError.args = {
    profile: {
        username: 'username',
        first: 'first',
        lastname: 'lastname',
        age: 12,
        country: Country.USA,
        city: 'city',
        currency: Currency.USD,
    },
    isLoading: false,
};
