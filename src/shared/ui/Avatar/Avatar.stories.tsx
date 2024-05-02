import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Avatar, AvatarSize } from './Avatar';
import AvatarImg from './avatar.jpeg';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        src: AvatarImg,
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const AvatarSizeM = Template.bind({});
AvatarSizeM.args = {
    size: AvatarSize.M,
};

export const AvatarSizeL = Template.bind({});
AvatarSizeL.args = {
    size: AvatarSize.L,
};

export const AvatarSizeXl = Template.bind({});
AvatarSizeXl.args = {
    size: AvatarSize.XL,
};

export const AvatarRound = Template.bind({});
AvatarRound.args = {
    isRound: true,
};
