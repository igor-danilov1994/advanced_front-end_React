import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Avatar, AvatarSize } from './Avatar';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        src: 'https://media.licdn.com/dms/image/D4E35AQGaZy-OzHGvuw/profile-framedphoto-shrink_200_200/0/1695894749917?e=1714460400&v=beta&t=Es3rDSoZinJZxqHhC6M92ZyxttWlL_YzErDlIw5Vz4I',
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Avatar_size_m = Template.bind({});
Avatar_size_m.args = {
    size: AvatarSize.M,
};

export const Avatar_size_l = Template.bind({});
Avatar_size_l.args = {
    size: AvatarSize.L,
};

export const Avatar_size_xl = Template.bind({});
Avatar_size_xl.args = {
    size: AvatarSize.XL,
};

export const Avatar_round = Template.bind({});
Avatar_round.args = {
    isRound: true,
};
