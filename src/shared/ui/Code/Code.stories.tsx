import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Code } from './Code';

export default {
    title: 'shared/Code',
    component: Code,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        code:
      'export default {\n'
      + "    title: 'shared/Code',\n"
      + '    component: Code,\n'
      + '    argTypes: {\n'
      + "        backgroundColor: { control: 'color' },\n"
      + '    },\n'
      + '    args: {\n'
      + '        square: true,\n'
      + '    },\n'
      + '} as ComponentMeta<typeof Code>;',
    },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
